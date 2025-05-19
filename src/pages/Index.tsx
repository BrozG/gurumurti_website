
import React from 'react';
import { Gallery, PaintRoller, Paintbrush, Palette, Images } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import GalleryItem from '@/components/GalleryItem';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  // Sample array of gallery items (replace with your actual images)
  const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552", title: "Elegant Wedding Setup", description: "Luxury table arrangements for wedding reception", large: true },
    { id: 2, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3", title: "Floral Installations", description: "Custom floral arrangements for ceremonies" },
    { id: 3, src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde", title: "Traditional Decorations", description: "Cultural wedding elements" },
    { id: 4, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622", title: "Wedding Mandap", description: "Beautifully decorated traditional wedding space" },
    { id: 5, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", title: "Table Settings", description: "Fine dining experience for your guests", large: true },
    { id: 6, src: "https://images.unsplash.com/photo-1578018272707-3c533cef22dd", title: "Lighting Design", description: "Create the perfect ambiance" },
  ];

  // Sample testimonial data
  const testimonials = [
    {
      quote: "Gurumurti Decorators transformed our wedding into a magical experience. Every detail was perfect!",
      name: "Anjali & Rahul",
      role: "Newlywed Couple"
    },
    {
      quote: "The attention to detail and artistic vision made our celebration truly unique. Highly recommend!",
      name: "Priya Singh",
      role: "Bride"
    },
    {
      quote: "They understood our vision perfectly and executed it beyond our expectations. Truly talented team!",
      name: "Vikram Thapa",
      role: "Groom"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6" 
            alt="Elegant wedding decoration" 
            className="w-full h-full object-cover animate-image-zoom"
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

      {/* About Section */}
      <section id="about" className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="About Us" 
                centered={false}
              />
              <p className="mb-4 text-lg">
                GURUMURTI DECORATORS is a premier wedding planning service located in Gangtok, specializing in crafting unforgettable wedding experiences that reflect your unique style and vision.
              </p>
              <p className="mb-4">
                With years of experience in the wedding industry, we expertly handle every aspect of your special day, from venue selection and vendor coordination to event design and timeline management.
              </p>
              <p className="mb-6">
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
              <div className="artframe">
                <img 
                  src="https://images.unsplash.com/photo-1560415103-132320330c66" 
                  alt="About Gurumurti Decorators" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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

      {/* Services Section */}
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
              icon={<Gallery size={40} />}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gold-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Happy Couples" 
            subtitle="What our clients say about their experience with us" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Contact Us" 
            subtitle="Let's discuss how we can make your dream wedding a reality" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Get in Touch</h3>
              <p className="mb-8">
                We'd love to hear about your wedding plans. Reach out to us for a consultation, and let's create something beautiful together.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 flex items-center justify-center rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-600">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 flex items-center justify-center rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@gurumurti.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-100 flex items-center justify-center rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-600">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Gangtok, Sikkim, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="artframe">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gold-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gold-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gold-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                </div>
                <div>
                  <label htmlFor="event-date" className="block mb-2 text-sm font-medium">Event Date</label>
                  <input type="date" id="event-date" className="w-full px-4 py-2 border border-gold-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gold-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-gold-600 text-white rounded-sm hover:bg-gold-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
