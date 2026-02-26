import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getGalleryImages } from "./_cloudinary";

function normalizeSecret(value: unknown): string {
  const raw = Array.isArray(value) ? value[0] : value;
  if (typeof raw !== "string") return "";
  return raw.trim().replace(/^['"]|['"]$/g, "");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const adminPassword = normalizeSecret(req.headers["x-admin-password"]);
  const expectedPassword = normalizeSecret(process.env.ADMIN_PASSWORD);

  if (!adminPassword || !expectedPassword || adminPassword !== expectedPassword) {
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
