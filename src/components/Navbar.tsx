
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
  className={cn(
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    scrolled
      ? 'bg-background/80 backdrop-blur-lg shadow-xl border-b border-white/10'
      : 'bg-background/50 backdrop-blur-md border-b border-white/5'
  )}
>
  <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 py-3 md:py-4">
    <a href="#" className="flex items-center space-x-2">
      <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
      <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-gold-800 flex items-center space-x-1">
        <span>GURUMURTI</span>
        <span className="text-gold-600">DECORATORS</span>
      </span>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-6 lg:space-x-8">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="font-medium text-sm hover:text-gold-600 transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-gold-800"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden w-full bg-background/95 backdrop-blur-sm border-t border-white/10">
      <div className="flex flex-col items-center space-y-4 py-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-base font-medium hover:text-gold-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )}
</nav>

    
  );
};

export default Navbar;
