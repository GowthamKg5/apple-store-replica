
import React from 'react';

interface LatestProductProps {
  preOrderText: string;
  title: string;
  withIntelligence?: boolean;
  price: string;
  imageSrc: string;
  index: number;
  customBg?: string;
  customTextColor?: string;
  appleIntelligenceColor?: string;
}

const LatestProduct: React.FC<LatestProductProps> = ({
  preOrderText,
  title,
  withIntelligence = true,
  price,
  imageSrc,
  index,
  customBg,
  customTextColor,
  appleIntelligenceColor
}) => {
  return (
    <div 
      className={`rounded-2xl overflow-hidden group animate-fade-in delayed-${index * 100}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className={`${customBg ? '' : index === 2 ? 'bg-black' : 'bg-apple-gray-100'} p-6 h-full flex flex-col`}
        style={customBg ? { background: customBg } : {}}
      >
        <div className="mb-auto">
          <p className={`text-xs font-medium uppercase ${customTextColor || (index === 2 ? 'text-white' : 'text-apple-gray-500')} mb-2`}>
            {preOrderText}
          </p>
          <h3 className={`text-3xl font-medium ${customTextColor || (index === 2 ? 'text-white' : 'text-apple-gray-600')} mb-2`}>
            {title}
          </h3>
          {withIntelligence && (
            <p className={`text-sm ${appleIntelligenceColor || customTextColor || (index === 2 ? 'text-white' : 'text-apple-gray-600')} flex items-center`}>
              Apple Intelligence
              <sup className="text-xs ml-0.5">1</sup>
            </p>
          )}
          <p className={`text-sm ${customTextColor || (index === 2 ? 'text-white' : 'text-apple-gray-600')} mt-2`}>
            From {price}
          </p>
        </div>
        <div className="mt-4 overflow-hidden flex justify-center items-end h-64 md:h-72 transition-transform duration-500">
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => console.error(`Failed to load image: ${imageSrc}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
