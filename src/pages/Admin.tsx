import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

type GalleryImage = {
  id: string;
  src: string;
  title: string;
};

function formatTitleFromId(id: string) {
  const slug = id.split("/").pop() || "";
  const withoutTimestamp = slug.replace(/-\d+$/, "");
  return withoutTimestamp.replace(/-/g, " ").trim() || "Untitled image";
}

function formatCategoryName(category: string) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function extractErrorMessage(payload: any): string {
  if (payload && typeof payload === "object") {
    if (typeof payload.message === "string" && payload.message.trim()) {
      return payload.message;
    }
    if (typeof payload.error === "string" && payload.error.trim()) {
      return payload.error;
    }
    if (typeof payload.details === "string" && payload.details.trim()) {
      return payload.details;
    }
  }
  return "";
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(false);

  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("wedding");
  const [customCategory, setCustomCategory] = useState("");

  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const defaultCategories = [
    "wedding",
    "reception",
    "engagement",
    "haldi",
    "mehendi",
    "anniversary",
    "baby-shower",
    "birthday",
    "corporate",
    "events",
  ];

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(""), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  async function handleLogin() {
    const adminPassword = password.trim();
    if (!adminPassword) return;

    setStatus("Verifying...");

    try {
      const res = await fetch("/api/gallery-admin", {
        headers: { "x-admin-password": adminPassword },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setAuthorized(false);
        if (res.status === 401) {
          setStatus("Incorrect password");
        } else {
          setStatus(extractErrorMessage(data) || `Login failed (${res.status})`);
        }
        return;
      }

      setImages(Array.isArray(data) ? data : []);
      setAuthorized(true);
      setStatus("");
    } catch {
      setAuthorized(false);
      setStatus("Unable to reach server");
    }
  }

  async function loadGallery() {
    const adminPassword = password.trim();
    if (!adminPassword) {
      setStatus("Please enter password again");
      setAuthorized(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/gallery-admin", {
        headers: { "x-admin-password": adminPassword },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        if (res.status === 401) {
          setAuthorized(false);
          setStatus("Session expired. Please login again");
        } else {
          setStatus(extractErrorMessage(data) || "Failed to load gallery");
        }
        return;
      }

      setImages(Array.isArray(data) ? data : []);
    } catch {
      setStatus("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload() {
    const adminPassword = password.trim();
    if (!adminPassword) {
      setStatus("Please login again");
      setAuthorized(false);
      return;
    }

    const categoryInput = category === "custom" ? customCategory : category;
    const categorySlug = slugify(categoryInput);

    if (!file || !title || !categorySlug) {
      setStatus("Image, title and category are required");
      return;
    }

    setUploading(true);

    const titleSlug = slugify(title);
    const year = new Date().getFullYear();
    const timestamp = Date.now();
    const generatedId = `gurumurti-decorators/${categorySlug}/${year}/${titleSlug}-${timestamp}`;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("publicId", generatedId);
    formData.append("title", title);

    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        headers: { "x-admin-password": adminPassword },
        body: formData,
      });

      if (!res.ok) {
        if (res.status === 401) {
          setAuthorized(false);
          setStatus("Session expired. Please login again");
        } else {
          const data = await res.json().catch(() => null);
          setStatus(extractErrorMessage(data) || "Upload failed");
        }
        return;
      }

      setStatus("Image uploaded");
      setShowUpload(false);
      setFile(null);
      setTitle("");
      setCategory("wedding");
      setCustomCategory("");
      loadGallery();
    } catch {
      setStatus("Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: string) {
    const adminPassword = password.trim();
    if (!adminPassword) {
      setStatus("Please login again");
      setAuthorized(false);
      return;
    }

    if (!confirm("Delete this image permanently?")) return;

    setDeletingId(id);

    try {
      const res = await fetch("/api/delete-image", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": adminPassword,
        },
        body: JSON.stringify({ publicId: id }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          setAuthorized(false);
          setStatus("Session expired. Please login again");
        } else {
          const data = await res.json().catch(() => null);
          setStatus(extractErrorMessage(data) || "Delete failed");
        }
        return;
      }

      setStatus("Image deleted");
      loadGallery();
    } catch {
      setStatus("Delete failed");
    } finally {
      setDeletingId(null);
    }
  }

  const groupedImages = images.reduce<Record<string, GalleryImage[]>>((acc, img) => {
    const theme = img.id.split("/")[1] || "uncategorized";
    if (!acc[theme]) acc[theme] = [];
    acc[theme].push(img);
    return acc;
  }, {});

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-black">
      <div className="w-full md:w-96 bg-black text-white p-6 flex flex-col">
        <div className="mb-6">
          <Button
            asChild
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            <Link to="/">Home</Link>
          </Button>
        </div>

        {!authorized ? (
          <div className="flex flex-col justify-center flex-grow">
            <h2 className="text-yellow-400 text-xl mb-6">Admin Login</h2>

            <div className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="!bg-zinc-900 !text-white !border-yellow-500 placeholder:!text-gray-400 pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <Button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                onClick={handleLogin}
              >
                Login
              </Button>

              {status && <p className="text-sm text-red-400">{status}</p>}
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-yellow-400 text-xl mb-6">Gallery Manager</h2>

            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black mb-4"
              onClick={() => setShowUpload(!showUpload)}
            >
              {showUpload ? "Close Upload" : "Upload New Image"}
            </Button>

            {showUpload && (
              <div className="space-y-3">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-zinc-900 text-white border border-yellow-500 p-2 rounded w-full"
                >
                  {defaultCategories.map((item) => (
                    <option key={item} value={item}>
                      {formatCategoryName(item)}
                    </option>
                  ))}
                  <option value="custom">Custom Category</option>
                </select>

                {category === "custom" && (
                  <Input
                    placeholder="Enter new category (e.g. house-warming)"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="!bg-zinc-900 !text-white !border-yellow-500"
                  />
                )}

                <Input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="!bg-zinc-900 !text-white !border-yellow-500"
                />

                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="!bg-zinc-900 !text-white !border-yellow-500"
                />

                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="w-full bg-yellow-500 text-black"
                >
                  {uploading ? "Uploading..." : "Upload"}
                </Button>
              </div>
            )}

            <Separator className="my-6 bg-yellow-500/20" />

            {loading && <p>Loading...</p>}
            {status && <p className="mt-4 text-sm">{status}</p>}
          </>
        )}
      </div>

      {!authorized ? (
        <div className="w-full md:flex-1 relative flex-grow min-h-[300px] md:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/admin-bg.png')" }}
          />
        </div>
      ) : (
        <div className="w-full md:flex-1 bg-zinc-950 p-4 md:p-8 overflow-y-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-8">
            Live Gallery Preview
          </h2>

          {Object.entries(groupedImages).map(([theme, themeImages]) => (
            <div key={theme} className="mb-12">
              <h3 className="text-xl text-yellow-300 mb-6 capitalize border-b border-yellow-500 pb-2">
                {formatCategoryName(theme)}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {themeImages.map((img) => {
                  const displayTitle = img.title?.trim() || formatTitleFromId(img.id);

                  return (
                    <div
                      key={img.id}
                      className="bg-black rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
                    >
                      <img
                        src={img.src}
                        alt={displayTitle}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm font-semibold text-white">{displayTitle}</p>

                        <Button
                          variant="destructive"
                          size="sm"
                          disabled={deletingId === img.id}
                          onClick={() => handleDelete(img.id)}
                          className="mt-3 w-full"
                        >
                          {deletingId === img.id ? "Deleting..." : "Delete"}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
