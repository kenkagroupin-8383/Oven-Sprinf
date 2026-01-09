export const bakeryInfo = {
  name: "Oven Spring",
  tagline: "EVERY DAY FRESH",
  rating: 4.9,
  reviewCount: 110,
  priceRange: "$1-10",
  phone: "022 599 8377",
  address: "164 Trafalgar Street, Onehunga, Auckland 1061",
  googleMapsUrl: "https://www.google.com/maps/place/Oven+Spring/@-36.9159731,174.783985",
  instagramUrl: "https://www.instagram.com/oven.spring_/",
  coordinates: {
    lat: -36.9158623,
    lng: 174.7840014
  },
  services: ["Takeaway", "Delivery"],
  hours: [
    { day: "Monday", open: "6:00 AM", close: "4:00 PM" },
    { day: "Tuesday", open: "6:00 AM", close: "4:00 PM" },
    { day: "Wednesday", open: "6:00 AM", close: "4:00 PM" },
    { day: "Thursday", open: "6:00 AM", close: "4:00 PM" },
    { day: "Friday", open: "6:00 AM", close: "4:00 PM" },
    { day: "Saturday", open: "6:00 AM", close: "3:00 PM" },
    { day: "Sunday", open: "Closed", close: "" }
  ],
  seoKeywords: "bakery, Onehunga, Auckland, sourdough, croissants, artisan bread, fresh pastries, pain au chocolat, cinnamon rolls, New Zealand bakery"
};

export const menuCategories = [
  {
    id: 1,
    name: "Artisan Sourdough Breads",
    description: "Slow-fermented with love",
    items: [
      { id: 1, name: "Country Sourdough Loaf", price: 8.00, description: "Our signature slow-fermented house sourdough" },
      { id: 2, name: "Seeded Sourdough", price: 9.00, description: "Loaded with sunflower, pumpkin & sesame seeds" },
      { id: 3, name: "Wholewheat Sourdough", price: 8.50, description: "Nutritious wholegrain goodness" },
      { id: 4, name: "Olive Sourdough", price: 9.50, description: "Studded with kalamata olives" },
      { id: 5, name: "Ciabatta", price: 6.00, description: "Light & airy Italian classic" },
      { id: 6, name: "Baguette", price: 5.00, description: "Crusty French-style bread" }
    ]
  },
  {
    id: 2,
    name: "Croissants & Viennoiserie",
    description: "Buttery, flaky perfection",
    items: [
      { id: 7, name: "Butter Croissant", price: 5.50, description: "Classic French croissant, 72-hour ferment" },
      { id: 8, name: "Almond Croissant", price: 7.00, description: "Filled with frangipane & topped with almonds" },
      { id: 9, name: "Chocolate Croissant", price: 6.50, description: "Two bars of premium dark chocolate" },
      { id: 10, name: "Pain au Chocolat", price: 6.00, description: "Flaky layers with rich chocolate" },
      { id: 11, name: "Ham & Cheese Croissant", price: 7.50, description: "Savoury croissant with premium fillings" }
    ]
  },
  {
    id: 3,
    name: "Sweet Pastries",
    description: "Freshly baked daily treats",
    items: [
      { id: 12, name: "Cinnamon Roll", price: 6.00, description: "Warm spiced roll with cream cheese icing" },
      { id: 13, name: "Morning Bun", price: 5.50, description: "Orange zest & cinnamon sugar" },
      { id: 14, name: "Danish Pastry", price: 6.50, description: "Seasonal fruit with vanilla custard" },
      { id: 15, name: "Kouign-Amann", price: 7.00, description: "Caramelised Breton butter pastry" },
      { id: 16, name: "Brioche Bun", price: 5.00, description: "Soft, enriched sweet bread" },
      { id: 17, name: "Chocolate Brownie", price: 5.50, description: "Dense, fudgy & rich" }
    ]
  },
  {
    id: 4,
    name: "Savoury Bakes",
    description: "Hearty lunch options",
    items: [
      { id: 18, name: "Spinach & Feta Danish", price: 6.50, description: "Creamy feta with fresh spinach" },
      { id: 19, name: "Tomato & Cheese Tart", price: 7.00, description: "Roasted tomatoes on cheesy base" },
      { id: 20, name: "Focaccia Sandwich", price: 9.00, description: "Fresh fillings on house-made focaccia" },
      { id: 21, name: "Sausage Roll", price: 6.00, description: "Seasoned pork in flaky pastry" },
      { id: 22, name: "Beef Pie", price: 7.50, description: "Classic NZ meat pie" }
    ]
  }
];

export const featuredItems = [
  {
    id: 1,
    name: "Fresh Sourdough",
    description: "72-hour fermented artisan bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Butter Croissants",
    description: "Flaky, buttery layers of perfection",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Pain au Chocolat",
    description: "Rich chocolate in flaky pastry",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Cinnamon Rolls",
    description: "Warm, spiced & freshly baked",
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Almond Croissants",
    description: "Filled with sweet frangipane",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Artisan Pastries",
    description: "Handcrafted daily specials",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Best bakery in Onehunga! The sourdough is incredible and always fresh. Their croissants rival any French bakery.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "James K.",
    rating: 5,
    text: "Amazing pastries and friendly service. The almond croissants are to die for! My go-to spot for weekend treats.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lisa T.",
    rating: 5,
    text: "The meat pies and sausage rolls are authentic Kiwi bakery experience. Everything is made with love here.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Mike R.",
    rating: 5,
    text: "Finally found proper sourdough in Auckland! The crust, the crumb - absolutely perfect. Worth the drive.",
    date: "1 week ago"
  }
];