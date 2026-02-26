
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle 
              title="About Us" 
              centered={false}
            />
            <p className="mb-4 text-base sm:text-lg">
              GURUMURTI DECORATORS is a premier wedding planning service located in Gangtok, specializing in crafting unforgettable wedding experiences that reflect your unique style and vision.
            </p>
            <p className="mb-4 text-sm sm:text-base">
              With years of experience in the wedding industry, we expertly handle every aspect of your special day, from venue selection and vendor coordination to event design and timeline management.
            </p>
            <p className="mb-6 text-sm sm:text-base">
              Our role as Wedding Planners is to ensure that every detail is carefully planned and executed, allowing you to enjoy a stress-free and joyful celebration. Obsessed with perfection, we are dedicated to making your dream wedding a reality, creating a seamless and beautiful experience for you and your guests.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                <span>Creative Excellence</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                <span>Attention to Detail</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                <span>Personalized Service</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                <span>Artistic Vision</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="h-72 sm:h-80 md:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden shadow-md">
              <img 
                src="/aboutus.jpg"
                alt="About Gurumurti Decorators" 
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
