import { useEffect, useState } from "react";
import GalleryItem from "@/components/GalleryItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

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

function getCategoryFromId(id: string) {
  return id.split("/")[1] || "others";
}

function formatCategoryName(category: string) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function TrueGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setImages(data);
      } catch {
        console.error("Failed to load full gallery");
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const groupedImages = images.reduce<Record<string, GalleryImage[]>>((acc, image) => {
    const category = getCategoryFromId(image.id);
    if (!acc[category]) acc[category] = [];
    acc[category].push(image);
    return acc;
  }, {});

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-cream-50 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Our Gallery"
            subtitle="Explore all our latest decoration work in one place"
          />

          {loading ? (
            <p className="text-center text-muted-foreground mt-10">Loading gallery...</p>
          ) : (
            <div className="space-y-14">
              {Object.entries(groupedImages).map(([category, categoryImages]) => (
                <div key={category}>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-gold-800 border-b border-gold-300 pb-3 mb-6">
                    {formatCategoryName(category)}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryImages.map((item) => {
                      const displayTitle = item.title?.trim() || formatTitleFromId(item.id);

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedImage(item)}
                          className="w-full bg-transparent p-0 text-left border-0"
                        >
                          <GalleryItem imageSrc={item.src} title={displayTitle} />
                          <p className="mt-3 text-sm font-semibold text-gold-800">
                            {displayTitle}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title?.trim() || formatTitleFromId(selectedImage.id)}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />

                <button
                  className="absolute top-4 right-4 text-gold-200 text-3xl font-bold"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>

                <div className="text-center mt-6 px-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {selectedImage.title?.trim() || formatTitleFromId(selectedImage.id)}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
