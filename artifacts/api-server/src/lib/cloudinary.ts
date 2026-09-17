import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { Readable } from "stream";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "xk8miuvg";
const apiKey = process.env.CLOUDINARY_API_KEY || "113659276996418";
const apiSecret = process.env.CLOUDINARY_API_SECRET || "KlyXT66PKq7TacJGENSaDnVZtGo";

export const isCloudinaryConfigured = Boolean(cloudName && apiKey && apiSecret);

if (isCloudinaryConfigured) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
}

export async function uploadToCloudinary(
  file: Express.Multer.File,
  folder = "abvt_projects"
): Promise<UploadApiResponse> {
  if (!isCloudinaryConfigured) {
    throw new Error("Cloudinary credentials are not configured.");
  }

  const cleanBaseName = (file.originalname || "asset")
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-zA-Z0-9_-]/g, "_");

  const resourceType = file.mimetype.startsWith("video/")
    ? "video"
    : file.mimetype.startsWith("image/")
    ? "image"
    : "auto";

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: `${Date.now()}-${cleanBaseName}`,
        resource_type: resourceType,
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        if (!result) {
          return reject(new Error("Cloudinary upload failed with empty result."));
        }
        resolve(result);
      }
    );

    const readable = new Readable();
    readable.push(file.buffer);
    readable.push(null);
    readable.pipe(uploadStream);
  });
}

export async function uploadUrlToCloudinary(
  url: string,
  folder = "abvt_projects"
): Promise<UploadApiResponse> {
  if (!isCloudinaryConfigured) {
    throw new Error("Cloudinary credentials are not configured.");
  }

  return cloudinary.uploader.upload(url, {
    folder,
    resource_type: "auto",
  });
}

export { cloudinary };
