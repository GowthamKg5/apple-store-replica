
import React from 'react';
import { MapPin } from 'lucide-react';

const AppleHelp = () => {
  return (
    <div className="fixed right-8 top-32 z-40 animate-fade-in delayed-500">
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-4 w-64">
        <div className="mb-4">
          <div className="w-8 h-8 rounded-full bg-apple-gray-200 flex items-center justify-center mb-2">
            <img 
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202308?wid=35&hei=35&fmt=jpeg&qlt=95&.v=1692900879038" 
              alt="Specialist" 
              className="w-7 h-7 rounded-full"
            />
          </div>
          <h3 className="text-sm font-medium text-apple-gray-600">Need shopping help?</h3>
          <a href="#" className="text-sm text-apple-blue hover:underline">
            Ask a Specialist &gt;
          </a>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-apple-gray-500" />
            <h3 className="text-sm font-medium text-apple-gray-600">Visit an Apple Store</h3>
          </div>
          <a href="#" className="text-sm text-apple-blue hover:underline">
            Find one near you &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppleHelp;
