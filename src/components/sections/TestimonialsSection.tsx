
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
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
  );
};

export default TestimonialsSection;
