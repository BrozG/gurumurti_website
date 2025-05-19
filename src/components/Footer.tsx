
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gold-800 text-cream-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GURUMURTI DECORATORS</h3>
            <p className="mb-4">Creating unforgettable wedding experiences in Gangtok.</p>
            <p>©{currentYear} GURUMURTI DECORATORS. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Gangtok, Sikkim</p>
            <p className="mb-2">Email: info@gurumurti.com</p>
            <p className="mb-2">Phone: +91 9876543210</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-gold-300 transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
