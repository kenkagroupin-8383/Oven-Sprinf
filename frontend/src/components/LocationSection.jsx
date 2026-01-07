import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { bakeryInfo } from '../data/mock';

const LocationSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-800 mb-3">
            Visit Us
          </h2>
          <p className="text-charcoal-600">
            Find us in the heart of Onehunga
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.8234567890!2d174.7840014!3d-36.9158623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4943bc599a1f%3A0xd9c1ef4671364558!2sOven%20Spring!5e0!3m2!1sen!2snz!4v1234567890!5m2!1sen!2snz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oven Spring Location"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-800 mb-1">Address</h3>
                  <p className="text-charcoal-600">{bakeryInfo.address}</p>
                  <a 
                    href={bakeryInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-amber-700 hover:text-amber-800 font-medium"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-800 mb-1">Phone</h3>
                  <a 
                    href={`tel:${bakeryInfo.phone.replace(/\s/g, '')}`}
                    className="text-charcoal-600 hover:text-amber-700 transition-colors text-lg font-medium"
                  >
                    {bakeryInfo.phone}
                  </a>
                  <p className="text-sm text-charcoal-500 mt-1">Call ahead for pickup orders</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-cream-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal-800 mb-3">Opening Hours</h3>
                  <div className="space-y-2">
                    {bakeryInfo.hours.map((hour, idx) => {
                      const isToday = new Date().getDay() === (idx === 6 ? 0 : idx + 1);
                      return (
                        <div 
                          key={hour.day}
                          className={`flex justify-between text-sm ${
                            isToday ? 'font-semibold text-amber-700' : 'text-charcoal-600'
                          }`}
                        >
                          <span>{hour.day}</span>
                          <span>
                            {hour.open === 'Closed' ? 'Closed' : `${hour.open} - ${hour.close}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;