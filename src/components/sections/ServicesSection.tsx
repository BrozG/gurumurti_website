
import React from 'react';
import { PaintRoller, Paintbrush, Palette, GalleryHorizontal } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive wedding planning and decoration services" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Venue Decoration"
            description="Transform any venue into a magical wedding space with our artistic decorations customized to your theme."
            icon={<PaintRoller size={40} />}
          />
          <ServiceCard 
            title="Floral Arrangements"
            description="Stunning flower arrangements and installations that add natural beauty and elegance to your celebration."
            icon={<Palette size={40} />}
          />
          <ServiceCard 
            title="Event Design"
            description="Full conceptualization and design of your event, creating a cohesive and beautiful aesthetic."
            icon={<Paintbrush size={40} />}
          />
          <ServiceCard 
            title="Complete Planning"
            description="End-to-end wedding planning services handling every detail from concept to execution."
            icon={<GalleryHorizontal size={40} />}
          />
        </div>
        
        <div className="mt-16 bg-gold-100 border border-gold-300 p-8 rounded-sm">
          <h3 className="text-2xl font-serif font-semibold mb-4">Customized Packages</h3>
          <p className="mb-6">
            We understand that every wedding is unique. The price of our services varies depending on several factors, including the type of decoration, location, and specific services required. Contact us for accurate and up-to-date pricing information tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-block px-6 py-2 bg-gold-600 text-white rounded-sm hover:bg-gold-700 transition-colors text-center">
              Request a Quote
            </a>
            <a href="#gallery" className="inline-block px-6 py-2 bg-transparent border border-gold-600 text-gold-800 rounded-sm hover:bg-gold-50 transition-colors text-center">
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
