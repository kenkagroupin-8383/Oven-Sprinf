import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { bakeryInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream-50/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo size={40} />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-charcoal-800 leading-tight">OVEN SPRING</span>
              <span className="text-[10px] tracking-[0.2em] text-charcoal-600">EVERY DAY FRESH</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-charcoal-700 hover:text-amber-700 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('menu')} className="text-charcoal-700 hover:text-amber-700 transition-colors font-medium">Menu</button>
            <button onClick={() => scrollToSection('about')} className="text-charcoal-700 hover:text-amber-700 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-charcoal-700 hover:text-amber-700 transition-colors font-medium">Contact</button>
          </nav>

          {/* Call Button - Desktop */}
          <a 
            href={`tel:${bakeryInfo.phone.replace(/\s/g, '')}`}
            className="hidden md:flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition-all hover:scale-105"
          >
            <Phone size={18} />
            <span className="font-medium">Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-charcoal-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 animate-slideDown">
          <nav className="flex flex-col py-4">
            <button onClick={() => scrollToSection('home')} className="px-6 py-3 text-left text-charcoal-700 hover:bg-cream-100 transition-colors">Home</button>
            <button onClick={() => scrollToSection('menu')} className="px-6 py-3 text-left text-charcoal-700 hover:bg-cream-100 transition-colors">Menu</button>
            <button onClick={() => scrollToSection('about')} className="px-6 py-3 text-left text-charcoal-700 hover:bg-cream-100 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-3 text-left text-charcoal-700 hover:bg-cream-100 transition-colors">Contact</button>
            <div className="px-6 py-3 flex gap-3">
              <a 
                href={`tel:${bakeryInfo.phone.replace(/\s/g, '')}`}
                className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-3 rounded-lg"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>
              <a 
                href={bakeryInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-charcoal-700 text-white px-4 py-3 rounded-lg"
              >
                <MapPin size={18} />
                <span>Directions</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;