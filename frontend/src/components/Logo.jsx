import React from 'react';

const Logo = ({ size = 48, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="Oven Spring Bakery Logo"
    >
      {/* Flour Sack Shape - tied at top with two ear lobes */}
      <path d="
        M 20 12 
        Q 16 8 18 4
        Q 22 2 26 6
        Q 28 8 32 8
        Q 36 8 38 6
        Q 42 2 46 4
        Q 48 8 44 12
        L 46 16
        Q 52 22 52 32
        Q 52 48 48 54
        Q 42 60 32 60
        Q 22 60 16 54
        Q 12 48 12 32
        Q 12 22 18 16
        Z
      " fill="#1a1a1a"/>
      
      {/* Wheat Stalk - centered, angled upward */}
      <g fill="#f8f5f0">
        {/* Main stem */}
        <path 
          d="M 26 50 Q 30 40 34 28" 
          stroke="#f8f5f0" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Wheat grain head - clustered oval shapes */}
        {/* Bottom grains */}
        <ellipse cx="29" cy="44" rx="4" ry="6" transform="rotate(-25 29 44)"/>
        <ellipse cx="35" cy="42" rx="4" ry="6" transform="rotate(15 35 42)"/>
        
        {/* Middle grains */}
        <ellipse cx="31" cy="37" rx="3.5" ry="5.5" transform="rotate(-20 31 37)"/>
        <ellipse cx="36" cy="35" rx="3.5" ry="5.5" transform="rotate(20 36 35)"/>
        
        {/* Upper grains */}
        <ellipse cx="33" cy="31" rx="3" ry="5" transform="rotate(-15 33 31)"/>
        <ellipse cx="37" cy="30" rx="3" ry="4.5" transform="rotate(15 37 30)"/>
        
        {/* Top grain */}
        <ellipse cx="35" cy="26" rx="2.5" ry="4" transform="rotate(5 35 26)"/>
      </g>
    </svg>
  );
};

export default Logo;