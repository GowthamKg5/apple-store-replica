
import React from 'react';

interface HelpOptionProps {
  category: string;
  title: string;
  description?: string;
  imageSrc: string;
  index: number;
}

const HelpOption: React.FC<HelpOptionProps> = ({
  category,
  title,
  description,
  imageSrc,
  index
}) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <p className="text-xs font-medium uppercase text-apple-gray-500">
            {category}
          </p>
          <h3 className="text-2xl font-medium text-apple-gray-600 mt-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-apple-gray-500 mt-2">
              {description}
            </p>
          )}
        </div>
        <div className="mt-auto overflow-hidden flex justify-center items-end">
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const AppleHelpOptions = () => {
  return (
    <section className="container-apple py-16 bg-apple-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-apple-gray-600 opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
          <span className="font-bold">Help is here.</span> <span className="font-normal text-apple-gray-500">Whenever and however you need it.</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <HelpOption 
          category="APPLE SPECIALIST"
          title="Shop one on one with a Specialist online."
          imageSrc="/lovable-uploads/ef2b8076-bf92-4278-a190-3a2b7efd7bb6.png"
          index={0}
        />
        <HelpOption 
          category="TODAY AT APPLE"
          title="Join free sessions at your Apple Store."
          description="Learn about the latest features and how to go further with your Apple devices."
          imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-today-help-202309?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1693766330803"
          index={1}
        />
        <HelpOption 
          category="BUSINESS"
          title="From enterprise to small business, we'll work with you."
          imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-business-help-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1661285238916"
          index={2}
        />
        <HelpOption 
          category="ONE-TO-ONE GUIDANCE"
          title="Get to know your new Personal Setup."
          description="Let us guide you through the latest features and apps specific to your new device."
          imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-personal-help-202309?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1694270921529"
          index={3}
        />
      </div>
    </section>
  );
};

export default AppleHelpOptions;
