import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getGalleryImages } from "./_cloudinary";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const adminPassword = req.headers["x-admin-password"];

  if (!adminPassword || adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const images = await getGalleryImages();
    return res.status(200).json(images);
  } catch (error) {
    console.error("Gallery Admin Error:", error);
    return res.status(500).json({ message: "Failed to load gallery" });
  }
}