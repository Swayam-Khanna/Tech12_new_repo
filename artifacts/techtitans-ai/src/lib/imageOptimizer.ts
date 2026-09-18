/**
 * Optimizes an image URL for ultrafast loading (<1-2s).
 * If the image is hosted on Cloudinary, applies `f_auto,q_auto` to serve modern
 * next-gen AVIF/WebP formats with adaptive compression.
 */
export function getOptimizedImageUrl(
  url?: string | null,
  options: { width?: number; quality?: "auto" | "auto:good" | "auto:eco" | "auto:low" } = {}
): string {
  if (!url || typeof url !== "string") return "";

  const cleanUrl = url.trim();
  if (!cleanUrl) return "";

  // Check if this is a Cloudinary image URL
  if (cleanUrl.includes("res.cloudinary.com") && cleanUrl.includes("/upload/")) {
    // Avoid double transforming if already transformed
    if (cleanUrl.includes("/f_auto") || cleanUrl.includes("/q_auto")) {
      return cleanUrl;
    }

    const transformations: string[] = ["f_auto", options.quality ? `q_${options.quality}` : "q_auto:good"];
    if (options.width) {
      transformations.push(`w_${options.width}`, "c_limit");
    }

    const transformString = transformations.join(",");
    return cleanUrl.replace("/upload/", `/upload/${transformString}/`);
  }

  return cleanUrl;
}
