import React from 'react';
import { featuredItems } from '../data/mock';

const FeaturedItems = () => {
  return (
    <section className="py-16 bg-cream-50" aria-labelledby="featured-heading">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="featured-heading" className="font-serif text-3xl md:text-4xl font-bold text-charcoal-800 mb-3">
            Fresh Today
          </h2>
          <p className="text-charcoal-600">
            Our most loved baked goods - baked fresh every morning
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredItems.map((item, idx) => (
            <article 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="aspect-square md:aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.name} - Fresh baked at Oven Spring Bakery`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-cream-200 text-xs md:text-sm">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;