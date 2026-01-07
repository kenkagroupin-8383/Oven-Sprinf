import React from 'react';
import Logo from './Logo';
import { bakeryInfo } from '../data/mock';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-800 text-cream-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="bg-cream-100 rounded-full p-2">
                <Logo size={40} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">OVEN SPRING</h3>
                <p className="text-xs tracking-[0.2em] text-cream-400">EVERY DAY FRESH</p>
              </div>
            </div>
            <p className="text-cream-400 text-sm">
              Artisan bakery serving Onehunga with fresh bread and pastries daily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <a 
                href={`tel:${bakeryInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 text-cream-400 hover:text-amber-400 transition-colors"
              >
                <Phone size={16} />
                {bakeryInfo.phone}
              </a>
              <a 
                href={bakeryInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-cream-400 hover:text-amber-400 transition-colors text-sm"
              >
                <MapPin size={16} />
                {bakeryInfo.address}
              </a>
            </div>
          </div>

          {/* Hours Summary */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="text-cream-400 text-sm space-y-1">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Clock size={14} />
                <span>Mon - Fri: 6AM - 4PM</span>
              </div>
              <p>Saturday: 6AM - 3PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-700 mt-8 pt-8 text-center">
          <p className="text-cream-500 text-sm">
            © {currentYear} Oven Spring Bakery. All rights reserved.
          </p>
          <p className="text-cream-600 text-xs mt-2">
            164 Trafalgar Street, Onehunga, Auckland 1061
          </p>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-charcoal-900/95 backdrop-blur-md border-t border-charcoal-700 p-3 z-50">
        <div className="flex gap-3">
          <a 
            href={`tel:${bakeryInfo.phone.replace(/\s/g, '')}`}
            className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white py-3 rounded-xl font-semibold"
          >
            <Phone size={18} />
            Call to Order
          </a>
          <a 
            href={bakeryInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-charcoal-700 text-white px-5 py-3 rounded-xl"
          >
            <MapPin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;