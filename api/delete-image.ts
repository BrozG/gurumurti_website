// api/delete-image.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { deleteImage } from "./_cloudinary.js";

function normalizeSecret(value: unknown): string {
  const raw = Array.isArray(value) ? value[0] : value;
  if (typeof raw !== "string") return "";
  return raw.trim().replace(/^['"]|['"]$/g, "");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow only DELETE requests
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Basic admin auth (server-side)
  const adminPassword = normalizeSecret(req.headers["x-admin-password"]);
  const expectedPassword = normalizeSecret(process.env.ADMIN_PASSWORD);

  if (!adminPassword || !expectedPassword || adminPassword !== expectedPassword) {
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
