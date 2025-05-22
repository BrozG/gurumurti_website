import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/SectionTitle';
import GalleryItem from '@/components/GalleryItem';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, src: "/chair.jpg", title: "Couple's Seating Area", description: "Every detail counts — even the chairs say ‘I do’ 🎀💒", large: true },
    { id: 2, src: "/dalai_Lama.jpg", title: "Spiritual Gathering Setup", description: "A beautifully crafted pandal created for the visit of His Holiness the Dalai Lama in Sikkim, blending tradition with peaceful elegance." },
    { id: 3, src: "/entry.jpg", title: "Traditional Entrance Decorations", description: "Welcoming guests with vibrant cultural touches and intricate designs that set the perfect tone for your celebration." },
    { id: 4, src: "/tent_house.jpg", title: "Tent House Setup", description: "Outdoor setup with elegant tent decorations" , large: true },
    { id: 5, src: "/tabledecor.jpg", title: "Exquisite Table Decor", description: "Artfully arranged centerpieces and elegant settings that bring charm and grace to every gathering.", large: true },
    { id: 6, src: "/wedding_hall.jpg", title: "Grand Wedding Hall", description: "Spacious and beautifully lit venue for your special day",large: true },
    { id: 7, src: "/skm.jpg", title: "Elegantly Decorated Stage", description: "A stunning stage setup that combines tradition and modern elegance, perfect for memorable ceremonies and celebrations." },
    { id: 8, src: "/lights.jpg", title: "Ambient Lighting", description: "Set the mood with perfect lighting design" },
  ];

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Gallery" 
          subtitle="A showcase of our artistic wedding decorations and setups" 
        />

        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} onClick={() => setSelectedImage(item)} className="cursor-pointer">
              <GalleryItem 
                imageSrc={item.src}
                title={item.title}
                description={item.description}
                large={item.large}
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-h-screen w-auto mx-auto rounded-lg shadow-2xl transition-transform duration-300 transform scale-100"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="text-white text-center mt-4">
                <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                <p className="mt-1 text-sm">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block px-8 py-3 bg-gold-600 text-white rounded-sm hover:bg-gold-700 transition-colors">
            Request Custom Decorations
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
