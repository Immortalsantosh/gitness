import React from 'react';

const CircularImage = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 overflow-hidden rounded-full border-2 border-gray-300">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default CircularImage;
