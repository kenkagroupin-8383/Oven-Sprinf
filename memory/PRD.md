# Oven Spring Bakery - Product Requirements Document

## Project Overview
Mobile-focused website for Oven Spring Bakery located in Onehunga, Auckland, New Zealand.

## Key Features Implemented

### 1. Custom Branding
- **Logo**: Custom SVG logo matching shop's branding (wheat grain inside bread/oven shape)
- **Favicon**: SVG favicon for browser tab
- **Color Scheme**: Warm cream/beige backgrounds with amber accents and charcoal text

### 2. Mobile-First Design
- Responsive layout optimized for mobile devices
- Sticky bottom CTA bar with "Call to Order" and "Directions" buttons
- Touch-friendly navigation and buttons

### 3. Business Information
- **Address**: 164 Trafalgar Street, Onehunga, Auckland 1061
- **Phone**: 022 599 8377 (click-to-call functionality)
- **Rating**: 4.9 stars (110 reviews)
- **Services**: Takeaway & Delivery

### 4. Features
- Hero section with logo, rating, and quick action buttons
- Featured items showcase with bakery imagery
- Expandable menu with prices (accordion style)
- Customer reviews section
- Google Maps embed for location
- Opening hours with current day highlighted
- About section
- Footer with contact info and hours summary

## Technical Stack
- React (Frontend)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- Custom fonts: Playfair Display (serif), Inter (sans-serif)

## Data Structure
- Mock data stored in `/app/frontend/src/data/mock.js`
- Bakery info, menu categories, featured items, and reviews

## Notes
- **MOCK DATA**: Menu items and prices are placeholder data
- No backend integration - this is a frontend-only landing page
- Google Maps embed uses general area coordinates
