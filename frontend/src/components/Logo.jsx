import React from 'react';

const Logo = ({ size = 48, className = "" }) => {
  return (
    <img 
      src="/logo.png"
      alt="Oven Spring Bakery Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Logo;