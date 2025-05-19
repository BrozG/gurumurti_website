
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import GalleryItem from '@/components/GalleryItem';

const GallerySection = () => {
  // Sample array of gallery items (replace with your actual images)
  const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552", title: "Elegant Wedding Setup", description: "Luxury table arrangements for wedding reception", large: true },
    { id: 2, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3", title: "Floral Installations", description: "Custom floral arrangements for ceremonies" },
    { id: 3, src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde", title: "Traditional Decorations", description: "Cultural wedding elements" },
    { id: 4, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622", title: "Wedding Mandap", description: "Beautifully decorated traditional wedding space" },
    { id: 5, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", title: "Table Settings", description: "Fine dining experience for your guests", large: true },
    { id: 6, src: "https://images.unsplash.com/photo-1578018272707-3c533cef22dd", title: "Lighting Design", description: "Create the perfect ambiance" },
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Gallery" 
          subtitle="A showcase of our artistic wedding decorations and setups" 
        />
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <GalleryItem 
              key={item.id}
              imageSrc={item.src}
              title={item.title}
              description={item.description}
              large={item.large}
            />
          ))}
        </div>
        
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
