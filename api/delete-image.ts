// api/delete-image.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { deleteImage } from "./_cloudinary";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow only DELETE requests
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Basic admin auth (server-side)
  const adminPassword = req.headers["x-admin-password"];
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { publicId } = req.body;

    if (!publicId) {
      return res.status(400).json({ error: "publicId is required" });
    }

    const result = await deleteImage(publicId);

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (err: any) {
    return res.status(500).json({
      error: "Failed to delete image",
      details: err.message,
    });
  }
}
