import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
import MenuSection from "./components/MenuSection";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedItems />
        <MenuSection />
        <ReviewsSection />
        <LocationSection />
        <div id="about" className="py-16 bg-cream-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-800 mb-6">
              About Oven Spring
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-6">
              Located in the heart of Onehunga, Auckland, Oven Spring Bakery has been serving the community 
              with freshly baked artisan breads, pastries, and savory treats. Our passion is simple: 
              bake fresh every day using traditional methods and quality ingredients.
            </p>
            <p className="text-charcoal-600 leading-relaxed">
              From our famous sourdough to our buttery croissants, every item is crafted with care. 
              Whether you're grabbing breakfast on the go or picking up a loaf for the family, 
              we're here to make your day a little more delicious.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;