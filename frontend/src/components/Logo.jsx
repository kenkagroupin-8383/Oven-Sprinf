import React from 'react';

const Logo = ({ size = 48, className = "", withBackground = false }) => {
  if (withBackground) {
    return (
      <div 
        className={`inline-flex items-center justify-center rounded-2xl ${className}`}
        style={{ 
          backgroundColor: '#f9f5ed',
          padding: size * 0.15,
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 64 64"
          width={size}
          height={size}
          aria-label="Oven Spring Bakery Logo"
        >
          {/* Top wavy opening part - curved bag mouth */}
          <path d="M 12 8 Q 20 14 32 10 Q 44 6 52 12 Q 54 8 50 4 Q 40 0 32 4 Q 24 0 14 4 Q 10 8 12 8 Z" fill="#1a1a1a"/>
          
          {/* Main sack body - rounded bag with flat top */}
          <path d="M 14 18 L 50 18 Q 56 24 56 38 Q 56 52 46 58 Q 38 62 32 62 Q 26 62 18 58 Q 8 52 8 38 Q 8 24 14 18 Z" fill="#1a1a1a"/>
          
          {/* Wheat stalk with leaf-shaped grains */}
          <g fill="#f5f5f5">
            {/* Stem */}
            <line x1="20" y1="54" x2="44" y2="28" stroke="#f5f5f5" strokeWidth="2.5" strokeLinecap="round"/>
            
            {/* Bottom pair */}
            <ellipse cx="24" cy="50" rx="5.5" ry="3" transform="rotate(-55 24 50)"/>
            <ellipse cx="30" cy="48" rx="5.5" ry="3" transform="rotate(35 30 48)"/>
            
            {/* Middle-lower pair */}
            <ellipse cx="29" cy="44" rx="5.5" ry="3" transform="rotate(-55 29 44)"/>
            <ellipse cx="35" cy="42" rx="5.5" ry="3" transform="rotate(35 35 42)"/>
            
            {/* Middle-upper pair */}
            <ellipse cx="34" cy="38" rx="5" ry="2.8" transform="rotate(-55 34 38)"/>
            <ellipse cx="40" cy="36" rx="5" ry="2.8" transform="rotate(35 40 36)"/>
            
            {/* Top pair */}
            <ellipse cx="39" cy="32" rx="4.5" ry="2.5" transform="rotate(-55 39 32)"/>
            <ellipse cx="44" cy="30" rx="4.5" ry="2.5" transform="rotate(35 44 30)"/>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="Oven Spring Bakery Logo"
    >
      {/* Top wavy opening part - curved bag mouth */}
      <path d="M 12 8 Q 20 14 32 10 Q 44 6 52 12 Q 54 8 50 4 Q 40 0 32 4 Q 24 0 14 4 Q 10 8 12 8 Z" fill="#1a1a1a"/>
      
      {/* Main sack body - rounded bag with flat top */}
      <path d="M 14 18 L 50 18 Q 56 24 56 38 Q 56 52 46 58 Q 38 62 32 62 Q 26 62 18 58 Q 8 52 8 38 Q 8 24 14 18 Z" fill="#1a1a1a"/>
      
      {/* Wheat stalk with leaf-shaped grains */}
      <g fill="#f5f5f5">
        {/* Stem */}
        <line x1="20" y1="54" x2="44" y2="28" stroke="#f5f5f5" strokeWidth="2.5" strokeLinecap="round"/>
        
        {/* Bottom pair */}
        <ellipse cx="24" cy="50" rx="5.5" ry="3" transform="rotate(-55 24 50)"/>
        <ellipse cx="30" cy="48" rx="5.5" ry="3" transform="rotate(35 30 48)"/>
        
        {/* Middle-lower pair */}
        <ellipse cx="29" cy="44" rx="5.5" ry="3" transform="rotate(-55 29 44)"/>
        <ellipse cx="35" cy="42" rx="5.5" ry="3" transform="rotate(35 35 42)"/>
        
        {/* Middle-upper pair */}
        <ellipse cx="34" cy="38" rx="5" ry="2.8" transform="rotate(-55 34 38)"/>
        <ellipse cx="40" cy="36" rx="5" ry="2.8" transform="rotate(35 40 36)"/>
        
        {/* Top pair */}
        <ellipse cx="39" cy="32" rx="4.5" ry="2.5" transform="rotate(-55 39 32)"/>
        <ellipse cx="44" cy="30" rx="4.5" ry="2.5" transform="rotate(35 44 30)"/>
      </g>
    </svg>
  );
};

export default Logo;