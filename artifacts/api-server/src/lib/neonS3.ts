import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import type { Readable } from "stream";

const endpoint = process.env.AWS_ENDPOINT_URL_S3;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION || "us-east-2";
export const BUCKET_NAME = process.env.NEON_S3_BUCKET || "abvt-assets";

export const isS3Configured = Boolean(endpoint && accessKeyId && secretAccessKey);

export const s3Client = isS3Configured
  ? new S3Client({
      endpoint,
      region,
      credentials: {
        accessKeyId: accessKeyId!,
        secretAccessKey: secretAccessKey!,
      },
      forcePathStyle: true,
    })
  : null;

export async function uploadToNeonS3(file: Express.Multer.File, folder = "uploads"): Promise<string> {
  if (!s3Client) {
    throw new Error("Neon S3 storage is not configured.");
  }

  const cleanName = (file.originalname || "image.png").replace(/[^a-zA-Z0-9.-]/g, "_");
  const key = `${folder}/${Date.now()}-${cleanName}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  return `/api/assets/${key}`;
}

export async function getObjectFromS3(key: string) {
  if (!s3Client) {
    throw new Error("Neon S3 storage is not configured.");
  }

  const res = await s3Client.send(
    new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    })
  );

  return {
    stream: res.Body as Readable,
    contentType: res.ContentType || "application/octet-stream",
    contentLength: res.ContentLength,
  };
}
