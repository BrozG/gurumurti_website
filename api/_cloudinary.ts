import { v2 as cloudinary } from "cloudinary";

function readRequiredEnv(name: string): string {
  const raw = process.env[name];
  if (!raw || typeof raw !== "string") {
    throw new Error(`Missing required env var: ${name}`);
  }
  return raw.trim().replace(/^['"]|['"]$/g, "");
}

cloudinary.config({
  cloud_name: readRequiredEnv("CLOUDINARY_CLOUD_NAME"),
  api_key: readRequiredEnv("CLOUDINARY_API_KEY"),
  api_secret: readRequiredEnv("CLOUDINARY_API_SECRET"),
});

function sanitizeContextValue(value: string) {
  return value.replace(/[|=]/g, " ").trim();
}

export async function uploadImage(
  filePath: string,
  publicId: string,
  title: string
) {
  const safeTitle = sanitizeContextValue(title);

  return cloudinary.uploader.upload(filePath, {
    public_id: publicId,
    overwrite: true,
    context: `caption=${safeTitle}`,
  });
}

export async function deleteImage(publicId: string) {
  return cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
  });
}

function readContextValue(image: any, key: string) {
  return image?.context?.custom?.[key] || image?.context?.[key] || "";
}

export async function getGalleryImages() {
  const result = await cloudinary.search
    .expression(
      "public_id:gurumurti-decorators/* OR public_id:Gurumurti-decorators/*"
    )
    .sort_by("created_at", "desc")
    .max_results(500)
    .execute();

  return result.resources.map((img: any) => ({
    id: img.public_id,
    src: img.secure_url,
    title: readContextValue(img, "caption"),
  }));
}
