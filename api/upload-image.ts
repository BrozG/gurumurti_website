import type { VercelRequest, VercelResponse } from "@vercel/node";
import { uploadImage } from "./_cloudinary";
import fs from "fs";
import { IncomingForm, File } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

function getField(value: any): string | undefined {
  if (!value) return undefined;
  if (Array.isArray(value)) return value[0];
  if (typeof value === "string") return value;
  return undefined;
}

function normalizeSecret(value: unknown): string {
  const raw = Array.isArray(value) ? value[0] : value;
  if (typeof raw !== "string") return "";
  return raw.trim().replace(/^['"]|['"]$/g, "");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminPassword = normalizeSecret(req.headers["x-admin-password"]);
  const expectedPassword = normalizeSecret(process.env.ADMIN_PASSWORD);

  if (!adminPassword || !expectedPassword || adminPassword !== expectedPassword) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const form = new IncomingForm({
    multiples: false,
    keepExtensions: true,
  });

  try {
    const { fields, files } = await new Promise<{
      fields: any;
      files: any;
    }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    let imageFile = files.image as File | File[] | undefined;

    if (!imageFile) {
      return res.status(400).json({
        error: "No image file received",
      });
    }

    if (Array.isArray(imageFile)) {
      imageFile = imageFile[0];
    }

    const publicId = getField(fields.publicId);
    const title = getField(fields.title);
    if (!publicId || !title) {
      return res.status(400).json({
        error: "publicId and title are required",
      });
    }

    const result = await uploadImage(
      imageFile.filepath,
      publicId,
      title
    );

    fs.unlinkSync(imageFile.filepath);

    return res.status(200).json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    });

  } catch (e: any) {
    console.error("Upload error:", e);
    return res.status(500).json({
      error: "Failed to upload image",
      details: e.message,
    });
  }
}
