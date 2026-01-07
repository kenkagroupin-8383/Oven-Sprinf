import React from 'react';

const Logo = ({ size = 48, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
    >
      {/* Bread/Oven shape - rounded bottom like actual shop logo */}
      <path 
        d="M32 4 C14 4 6 16 6 30 C6 44 14 58 32 60 C50 58 58 44 58 30 C58 16 50 4 32 4" 
        fill="#3d3d3d"
      />
      {/* Wheat grain arrangement */}
      <g fill="#f5f0e6">
        {/* Center stem */}
        <ellipse cx="32" cy="38" rx="2.5" ry="7"/>
        {/* Left grains */}
        <ellipse cx="26" cy="28" rx="4" ry="7" transform="rotate(-25 26 28)"/>
        <ellipse cx="23" cy="40" rx="3" ry="5.5" transform="rotate(-30 23 40)"/>
        {/* Right grains */}
        <ellipse cx="38" cy="28" rx="4" ry="7" transform="rotate(25 38 28)"/>
        <ellipse cx="41" cy="40" rx="3" ry="5.5" transform="rotate(30 41 40)"/>
        {/* Top grain */}
        <ellipse cx="32" cy="18" rx="3" ry="6"/>
      </g>
    </svg>
  );
};

export default Logo;