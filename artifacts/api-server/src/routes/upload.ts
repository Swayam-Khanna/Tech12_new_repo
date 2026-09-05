import { Router } from "express";
import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { upload } from "../middlewares/upload";
import { uploadToNeonS3, isS3Configured } from "../lib/neonS3";

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
      res.status(500).json({ error: uploadErr.message || "Failed to upload file to storage" });
    }
  });
});

export default router;

