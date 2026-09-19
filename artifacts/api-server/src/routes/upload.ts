import { Router } from "express";
import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { upload } from "../middlewares/upload";
import {
  uploadToCloudinary,
  uploadUrlToCloudinary,
  generateCloudinarySignature,
  isCloudinaryConfigured
} from "../lib/cloudinary";
import { uploadToNeonS3, getObjectFromS3, isS3Configured } from "../lib/neonS3";

const SECRET = process.env["ADMIN_SECRET"] || "tt_secret_key_2024";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers["authorization"];
  if (!auth || !auth.startsWith("Bearer ")) { res.status(401).json({ error: "Unauthorized" }); return; }
  const token = auth.slice(7);
  try {
    const decoded = jwt.verify(token, SECRET) as { role?: string };
    if (decoded.role !== "ADMIN") {
      res.status(401).json({ error: "Invalid token role" });
      return;
    }
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}

const router = Router();

/**
 * Direct file upload (images, videos, documents)
 * Automatically uploads to Cloudinary with S3 fallback.
 */
router.post("/admin/upload", requireAdmin, (req, res, next) => {
  upload.single("file")(req, res, async (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }
    
    const file = req.file;
    const type = file.mimetype.startsWith("image/") ? "image"
      : file.mimetype.startsWith("video/") ? "video"
      : "pdf";

    try {
      if (isCloudinaryConfigured) {
        const cRes = await uploadToCloudinary(file, "abvt_projects");
        res.json({
          url: cRes.secure_url || cRes.url,
          filename: file.originalname,
          originalName: file.originalname,
          size: file.size,
          type,
          publicId: cRes.public_id,
        });
        return;
      }

      if (isS3Configured) {
        const url = await uploadToNeonS3(file, "projects");
        res.json({
          url,
          filename: file.originalname,
          originalName: file.originalname,
          size: file.size,
          type,
        });
        return;
      }

      res.status(500).json({ error: "Storage service not configured" });
    } catch (uploadErr: any) {
      console.error("Upload error:", uploadErr);
      res.status(500).json({ error: uploadErr.message || "Failed to upload file to storage" });
    }
  });
});

/**
 * URL upload route: Takes any external image/media URL,
 * uploads it to Cloudinary, and returns the persistent Cloudinary URL.
 */
router.post("/admin/upload-url", requireAdmin, async (req, res) => {
  const { url } = req.body as { url?: string };
  if (!url || typeof url !== "string" || !url.trim()) {
    res.status(400).json({ error: "URL is required" });
    return;
  }

  try {
    if (isCloudinaryConfigured) {
      const cRes = await uploadUrlToCloudinary(url.trim(), "abvt_projects");
      res.json({
        url: cRes.secure_url || cRes.url,
        publicId: cRes.public_id,
      });
      return;
    }

    // If Cloudinary is not configured, simply return original URL
    res.json({ url: url.trim() });
  } catch (err: any) {
    console.error("Cloudinary URL upload error:", err);
    res.status(500).json({ error: err.message || "Failed to upload URL to Cloudinary" });
  }
});

/**
 * Direct browser-to-Cloudinary upload signature endpoint.
 * Bypasses reverse-proxy/Coolify payload limits and buffer timeouts,
 * uploading directly to Cloudinary CDN in 2-5 seconds.
 */
router.post("/admin/upload-signature", requireAdmin, async (req, res) => {
  try {
    const folder = (req.body?.folder as string) || "abvt_projects";
    const timestamp = Math.round(Date.now() / 1000);
    const signData = generateCloudinarySignature({ folder, timestamp });
    res.json(signData);
  } catch (err: any) {
    console.error("Cloudinary signature generation error:", err);
    res.status(500).json({ error: err.message || "Failed to generate upload signature" });
  }
});

router.get("/assets/{*key}", async (req, res) => {
  try {
    const paramKey = (req.params as any).key;
    const rawKey = Array.isArray(paramKey) ? paramKey.join("/") : (typeof paramKey === "string" ? paramKey : req.path.replace(/^\/assets\//, ""));
    const decodedKey = decodeURIComponent(rawKey);
    if (!decodedKey) {
      res.status(400).json({ error: "Object key is required" });
      return;
    }

    const { stream, contentType, contentLength } = await getObjectFromS3(decodedKey);

    res.setHeader("Content-Type", contentType);
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.setHeader("Access-Control-Allow-Origin", "*");

    (stream as any).pipe(res);
  } catch (err: any) {
    console.error("Error retrieving asset from S3:", err);
    if (err.name === "NoSuchKey" || err.$metadata?.httpStatusCode === 404) {
      res.status(404).json({ error: "Asset not found" });
      return;
    }
    res.status(500).json({ error: err.message || "Failed to retrieve asset" });
  }
});

export default router;

