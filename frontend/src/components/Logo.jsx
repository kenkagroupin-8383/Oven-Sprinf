import React from 'react';

const Logo = ({ size = 48, className = "" }) => {
  return (
    <img 
      src="https://customer-assets.emergentagent.com/job_fresh-bakes-294/artifacts/x6rb1mb3_image.png"
      alt="Oven Spring Bakery Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Logo;