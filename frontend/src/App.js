import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
import MenuSection from "./components/MenuSection";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import { bakeryInfo } from "./data/mock";

function App() {
  return (
    <div className="App" itemScope itemType="https://schema.org/Bakery">
      {/* Hidden SEO metadata */}
      <meta itemProp="name" content="Oven Spring Bakery" />
      <meta itemProp="description" content="Fresh artisan sourdough bread, croissants, and pastries baked daily in Onehunga, Auckland." />
      <meta itemProp="telephone" content="+64225998377" />
      <meta itemProp="priceRange" content="$1-$10" />
      
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <FeaturedItems />
        <MenuSection />
        <ReviewsSection />
        <LocationSection />
        
        {/* About Section with SEO */}
        <section id="about" className="py-16 bg-cream-50" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 id="about-heading\" className="font-serif text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
              About Oven Spring Bakery
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-6">
              Located in the heart of <strong>Onehunga, Auckland</strong>, Oven Spring Bakery has been serving the community 
              with freshly baked <strong>artisan sourdough breads</strong>, flaky <strong>croissants</strong>, and savory treats. 
              Our passion is simple: bake fresh every day using traditional fermentation methods and quality ingredients.
            </p>
            <p className="text-charcoal-600 leading-relaxed mb-6">
              From our famous <strong>72-hour fermented sourdough</strong> to our buttery French-style <strong>pain au chocolat</strong>, 
              every item is crafted with care. Whether you're grabbing breakfast on the go or picking up a loaf for the family, 
              we're here to make your day a little more delicious.
            </p>
            <p className="text-charcoal-600 leading-relaxed">
              Visit us at <strong>164 Trafalgar Street, Onehunga</strong> - open from 6AM daily. 
              Call <a href={`tel:${bakeryInfo.phone.replace(/\\s/g, '')}`} className="text-amber-700 hover:underline font-semibold">{bakeryInfo.phone}</a> for pickup orders.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;