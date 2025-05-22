
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gold-800 text-cream-50 py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div>
        <h3 className="text-xl font-bold mb-4">GURUMURTI DECORATORS</h3>
        <p className="mb-4">Creating unforgettable wedding experiences in Gangtok.</p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <p className="mb-2">Indira Bye Pass Road,Opposite S.D.F Bhawan, Gangtok, Sikkim</p>
        <p className="mb-2">Email: gurumurtidecorators@gmail.com</p>
        <p className="mb-2">Phone: +91 9832993905</p>
      </div>

      {/* New 3rd column for copyright */}
      <div className="text-right">
        <p>©{currentYear} GURUMURTI DECORATORS. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
