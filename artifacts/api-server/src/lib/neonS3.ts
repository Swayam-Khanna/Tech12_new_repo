import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

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

  const key = `${folder}/${Date.now()}-${cleanName}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  const normalizedEndpoint = endpoint!.replace(/\/+$/, "");
  return `${normalizedEndpoint}/${BUCKET_NAME}/${key}`;
}
