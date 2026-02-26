import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getGalleryImages } from "./_cloudinary";

/**
 * GET /api/gallery
 * Returns all gallery images from Cloudinary folder: Gurumurti-Decorators
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const images = await getGalleryImages();

    return res.status(200).json(images);
  } catch (error: any) {
    console.error("Gallery API error:", error);

    return res.status(500).json({
      error: "Failed to fetch gallery images",
    });
  }
}
