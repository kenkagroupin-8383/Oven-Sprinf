import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { menuCategories } from '../data/mock';

const MenuSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(1);

  return (
    <section id="menu" className="py-16 bg-white" aria-labelledby="menu-heading">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 id="menu-heading" className="font-serif text-3xl md:text-4xl font-bold text-charcoal-800 mb-3">
            Our Menu
          </h2>
          <p className="text-charcoal-600 max-w-md mx-auto">
            Fresh baked goods made with love, every single day. Cabinet changes daily!
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-4" role="list">
          {menuCategories.map((category) => (
            <article 
              key={category.id}
              className="bg-cream-50 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full flex items-center justify-between p-5 hover:bg-cream-100 transition-colors"
                aria-expanded={expandedCategory === category.id}
                aria-controls={`menu-${category.id}`}
              >
                <div className="text-left">
                  <h3 className="font-serif text-xl font-semibold text-charcoal-800">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-charcoal-500 mt-0.5">{category.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-charcoal-500">
                    {category.items.length} items
                  </span>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="text-charcoal-500" size={20} aria-hidden="true" />
                  ) : (
                    <ChevronDown className="text-charcoal-500" size={20} aria-hidden="true" />
                  )}
                </div>
              </button>

              {/* Category Items */}
              <div 
                id={`menu-${category.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedCategory === category.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="list"
              >
                <div className="px-5 pb-5 space-y-3">
                  {category.items.map((item) => (
                    <div 
                      key={item.id}
                      className="flex justify-between items-start p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                      role="listitem"
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
            </article>
          ))}
        </div>

        {/* Call to Order */}
        <div className="mt-10 text-center">
          <p className="text-charcoal-600 mb-4">Ready to order? Give us a call!</p>
          <a 
            href="tel:0225998377"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
          >
            Call for Pickup: 022 599 8377
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;