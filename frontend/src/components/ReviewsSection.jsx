import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews, bakeryInfo } from '../data/mock';

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-cream-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="fill-amber-400 text-amber-400" size={32} />
            <span className="text-4xl font-bold text-charcoal-800">{bakeryInfo.rating}</span>
          </div>
          <p className="text-charcoal-600">
            Based on {bakeryInfo.reviewCount} reviews on Google
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Quote className="text-amber-200 mb-4" size={32} />
              <p className="text-charcoal-700 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-charcoal-800">{review.name}</p>
                  <p className="text-sm text-charcoal-500">{review.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400" size={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a 
            href={bakeryInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-800 font-medium hover:underline"
          >
            View all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;