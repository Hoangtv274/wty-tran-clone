import React, { useState } from 'react';

interface SizeSelectorProps {
  sizes: string[];
  onSizeSelect: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, onSizeSelect }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
    onSizeSelect(size);
  };

  return (
    <div className="my-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Size</h3>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            className={`min-w-[60px] h-12 px-5 rounded-lg font-semibold text-sm transition-all duration-300 ${selectedSize === size
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/40 border-2 border-purple-600'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-500 hover:-translate-y-1 hover:shadow-md'
              }`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
