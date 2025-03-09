
import React from 'react';

interface ProductCategoryProps {
  imageSrc: string;
  title: string;
  delay?: number;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ 
  imageSrc, 
  title,
  delay = 0
}) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center group animate-scale-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-105">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xs font-medium text-apple-gray-600 group-hover:text-apple-blue transition-colors duration-300">
        {title}
      </h3>
    </div>
  );
};

export default ProductCategory;
