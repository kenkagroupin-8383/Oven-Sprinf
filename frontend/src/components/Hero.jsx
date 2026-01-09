import React from 'react';
import { Phone, MapPin, Clock, Star, Instagram } from 'lucide-react';
import { bakeryInfo } from '../data/mock';
import Logo from './Logo';

const Hero = () => {
  const getTodayHours = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];
    const todayHours = bakeryInfo.hours.find(h => h.day === today);
    if (todayHours.open === 'Closed') return 'Closed Today';
    return `Open ${todayHours.open} - ${todayHours.close}`;
  };

  return (
    <section id="home" className="relative min-h-screen pt-16 bg-gradient-to-b from-cream-100 to-cream-50" aria-label="Welcome to Oven Spring Bakery">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo with theme background */}
          <div className="mb-6 animate-fadeIn">
            <Logo size={100} withBackground={true} className="shadow-lg" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-charcoal-800 mb-2 animate-fadeIn">
            OVEN SPRING
          </h1>
          <p className="text-lg md:text-xl tracking-[0.3em] text-charcoal-600 mb-4 animate-fadeIn animation-delay-100">
            EVERY DAY FRESH
          </p>
          
          {/* Rating Badge */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-4 animate-fadeIn animation-delay-200">
            <Star className="fill-amber-400 text-amber-400" size={20} aria-hidden="true" />
            <span className="font-semibold text-charcoal-800">{bakeryInfo.rating}</span>
            <span className="text-charcoal-500">({bakeryInfo.reviewCount} reviews)</span>
          </div>

          {/* Instagram Link */}
          <a 
            href={bakeryInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-charcoal-600 hover:text-amber-700 transition-colors mb-6 animate-fadeIn animation-delay-250"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={20} />
            <span className="text-sm font-medium">@oven.spring_</span>
          </a>

          {/* Service Tags */}
          <div className="flex gap-3 mb-8 animate-fadeIn animation-delay-300">
            {bakeryInfo.services.map((service, idx) => (
              <span key={idx} className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium">
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-12 animate-fadeIn animation-delay-400">
            <a 
              href={`tel:${bakeryInfo.phone.replace(/\s/g, '')}`}
              className="flex-1 flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              aria-label="Call to order pickup"
            >
              <Phone size={22} aria-hidden="true" />
              <span>Order Pickup</span>
            </a>
            <a 
              href={bakeryInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-charcoal-700 hover:bg-charcoal-800 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              aria-label="Get directions to Oven Spring Bakery"
            >
              <MapPin size={22} aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl animate-fadeIn animation-delay-500">
            {/* Hours */}
            <article className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md">
              <Clock className="text-amber-600 mb-2 mx-auto" size={28} aria-hidden="true" />
              <p className="text-sm text-charcoal-500">Today</p>
              <p className="font-semibold text-charcoal-800">{getTodayHours()}</p>
            </article>
            
            {/* Phone */}
            <article className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md">
              <Phone className="text-amber-600 mb-2 mx-auto" size={28} aria-hidden="true" />
              <p className="text-sm text-charcoal-500">Call Us</p>
              <a href={`tel:${bakeryInfo.phone.replace(/\s/g, '')}`} className="font-semibold text-charcoal-800 hover:text-amber-600 transition-colors">
                {bakeryInfo.phone}
              </a>
            </article>
            
            {/* Location */}
            <article className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md">
              <MapPin className="text-amber-600 mb-2 mx-auto" size={28} aria-hidden="true" />
              <p className="text-sm text-charcoal-500">Location</p>
              <p className="font-semibold text-charcoal-800 text-sm">Onehunga, Auckland</p>
            </article>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-charcoal-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-charcoal-400 rounded-full animate-scrollPulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;