import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
        <img
          src={images[selectedImage]}
          alt={`${productName} - View ${selectedImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex gap-3 overflow-x-auto py-2 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-20 h-20 border-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg ${selectedImage === index
              ? 'border-purple-500 shadow-lg shadow-purple-500/40'
              : 'border-transparent bg-gray-100'
              }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
