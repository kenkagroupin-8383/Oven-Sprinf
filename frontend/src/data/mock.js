export const bakeryInfo = {
  name: "Oven Spring",
  tagline: "EVERY DAY FRESH",
  rating: 4.9,
  reviewCount: 110,
  priceRange: "$1-10",
  phone: "022 599 8377",
  address: "164 Trafalgar Street, Onehunga, Auckland 1061",
  googleMapsUrl: "https://www.google.com/maps/place/Oven+Spring/@-36.9159731,174.783985",
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
  ]
};

export const menuCategories = [
  {
    id: 1,
    name: "Artisan Breads",
    items: [
      { id: 1, name: "Sourdough Loaf", price: 6.50, description: "Traditional slow-fermented sourdough" },
      { id: 2, name: "Ciabatta", price: 5.50, description: "Italian crusty bread, perfect for sandwiches" },
      { id: 3, name: "Baguette", price: 4.50, description: "Classic French bread, crispy crust" },
      { id: 4, name: "Multigrain Loaf", price: 6.00, description: "Healthy seeds and grains blend" }
    ]
  },
  {
    id: 2,
    name: "Pastries",
    items: [
      { id: 5, name: "Croissant", price: 4.00, description: "Buttery, flaky layers" },
      { id: 6, name: "Pain au Chocolat", price: 4.50, description: "Chocolate-filled croissant" },
      { id: 7, name: "Danish Pastry", price: 5.00, description: "Fruit-topped sweet pastry" },
      { id: 8, name: "Cinnamon Roll", price: 5.50, description: "Warm spiced roll with icing" }
    ]
  },
  {
    id: 3,
    name: "Savoury",
    items: [
      { id: 9, name: "Meat Pie", price: 6.50, description: "Classic NZ beef pie" },
      { id: 10, name: "Sausage Roll", price: 5.00, description: "Flaky pastry with seasoned meat" },
      { id: 11, name: "Spinach & Feta Roll", price: 5.50, description: "Vegetarian delight" },
      { id: 12, name: "Bacon & Egg Pie", price: 6.00, description: "Breakfast favourite" }
    ]
  },
  {
    id: 4,
    name: "Cakes & Sweets",
    items: [
      { id: 13, name: "Lamington", price: 4.00, description: "Chocolate-coated sponge with coconut" },
      { id: 14, name: "Carrot Cake Slice", price: 5.50, description: "Moist cake with cream cheese frosting" },
      { id: 15, name: "Brownie", price: 4.50, description: "Rich chocolate brownie" },
      { id: 16, name: "Custard Square", price: 4.00, description: "Classic vanilla custard slice" }
    ]
  }
];

export const featuredItems = [
  {
    id: 1,
    name: "Fresh Sourdough",
    description: "Baked fresh every morning",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Butter Croissants",
    description: "Flaky, buttery perfection",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Artisan Pastries",
    description: "Handcrafted daily",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Best bakery in Onehunga! The sourdough is incredible and always fresh.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "James K.",
    rating: 5,
    text: "Amazing pastries and friendly service. My go-to spot for weekend treats!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lisa T.",
    rating: 5,
    text: "The meat pies are to die for! Authentic Kiwi bakery experience.",
    date: "3 weeks ago"
  }
];