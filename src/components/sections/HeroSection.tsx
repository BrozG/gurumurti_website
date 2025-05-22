import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background (Image + Overlay) */}
      <div className="absolute inset-0 z-0 animate-image-zoom">
        <img 
          src="/hero.jpg" 
          alt="Elegant wedding decoration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
          <span className="block">GURUMURTI</span>
          <span className="text-gold-400">DECORATORS</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Crafting unforgettable wedding experiences in Gangtok with artistic excellence and meticulous attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#gallery" className="px-8 py-3 bg-gold-600 text-white rounded-sm hover:bg-gold-700 transition-colors">
            View Our Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-white text-white rounded-sm hover:bg-white/10 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
