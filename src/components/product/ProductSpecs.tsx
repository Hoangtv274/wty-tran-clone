import React from 'react';

interface Spec {
  icon: string;
  text: string;
}

interface ProductSpecsProps {
  specs: Spec[];
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ specs }) => {
  return (
    <div className="my-8 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Product Features
      </h2>
      <div className="flex flex-col gap-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-white rounded-xl transition-all duration-300 hover:translate-x-2 hover:shadow-md shadow-sm"
          >
            <span className="text-2xl flex-shrink-0">{spec.icon}</span>
            <span className="text-sm leading-relaxed text-gray-700">{spec.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecs;
