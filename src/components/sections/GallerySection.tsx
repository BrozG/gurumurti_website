import React, { useEffect, useState } from "react";
import GalleryItem from "@/components/GalleryItem";
import { Link } from "react-router-dom";
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

const GallerySection = () => {
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
        console.error("Failed to load gallery");
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

  const latestImages = images.slice(0, 4);
  return (
    <section id="gallery" className="py-16 md:py-20 bg-cream-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Our Gallery"
          subtitle="A showcase of our artistic decorations and setups"
        />

        {loading ? (
          <p className="text-center text-muted-foreground mt-10">Loading gallery...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
              {latestImages.map((item) => {
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

            <div className="text-center mt-10">
              <Link
                to="/true-gallery"
                className="inline-block px-4 py-2 text-sm bg-gold-600 text-white font-semibold rounded-sm hover:bg-gold-700 transition-colors"
              >
                View Full Gallery
              </Link>
            </div>
          </>
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
  );
};

export default GallerySection;
