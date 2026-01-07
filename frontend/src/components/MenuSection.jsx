import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { menuCategories } from '../data/mock';

const MenuSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(1);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-800 mb-3">
            Our Menu
          </h2>
          <p className="text-charcoal-600 max-w-md mx-auto">
            Fresh baked goods made with love, every single day
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-4">
          {menuCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-cream-50 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full flex items-center justify-between p-5 hover:bg-cream-100 transition-colors"
              >
                <h3 className="font-serif text-xl font-semibold text-charcoal-800">
                  {category.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-charcoal-500">
                    {category.items.length} items
                  </span>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="text-charcoal-500" size={20} />
                  ) : (
                    <ChevronDown className="text-charcoal-500" size={20} />
                  )}
                </div>
              </button>

              {/* Category Items */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedCategory === category.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-5 pb-5 space-y-3">
                  {category.items.map((item) => (
                    <div 
                      key={item.id}
                      className="flex justify-between items-start p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1 pr-4">
                        <h4 className="font-medium text-charcoal-800">{item.name}</h4>
                        <p className="text-sm text-charcoal-500 mt-1">{item.description}</p>
                      </div>
                      <span className="font-semibold text-amber-700 whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Order */}
        <div className="mt-10 text-center">
          <p className="text-charcoal-600 mb-4">Ready to order? Give us a call!</p>
          <a 
            href="tel:0225998377"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
          >
            Call for Pickup
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;