import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  // Sample testimonial data
  const testimonials = [
    {
    quote: "Gurumurti Decorators brought our Sikkimese wedding to life with elegance and tradition. Every detail felt personal and heartfelt.",
    name: "Tashi & Pema",
    role: "Newlywed Couple from Gangtok"
  },
  {
    quote: "From the traditional décor to the floral arrangements, everything was thoughtfully done. Our families were so impressed!",
    name: "Sonam Lepcha",
    role: "Bride from Namchi"
  },
  {
    quote: "They understood our cultural values and turned our big day into something unforgettable. Thank you for making it so special!",
    name: "Karma Bhutia",
    role: "Groom from Mangan"
  }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gold-50">
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
  );
};

export default TestimonialsSection;
