
import React from 'react';
import { AppleIcon } from './icons/AppleIcon';
import { CreditCard, SmartphoneCharging, Smile, Truck } from 'lucide-react';

interface StoreBenefitProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  color: string;
  index: number;
}

const StoreBenefit: React.FC<StoreBenefitProps> = ({
  icon,
  title,
  subtitle,
  color,
  index
}) => {
  return (
    <div 
      className="bg-white rounded-2xl p-6 h-full flex flex-col animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`text-3xl mb-4 ${color}`}>
        {icon}
      </div>
      <div>
        <div className={`text-xl font-medium mb-2 ${color}`}>
          {title}
        </div>
        {subtitle && (
          <div className={`text-sm ${color}`}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

const AppleStoreDifference = () => {
  return (
    <section className="container-apple py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-apple-gray-600 opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
          <span className="font-bold">The Apple Store difference.</span> <span className="font-normal text-apple-gray-500">Even more reasons to shop with us.</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StoreBenefit 
          icon={<CreditCard className="text-green-500" />}
          title={<>Instant cashback.<sup>§§</sup></>}
          subtitle={<>Plus No Cost EMI.<sup>§</sup></>}
          color="text-apple-gray-600"
          index={0}
        />
        
        <StoreBenefit 
          icon={<SmartphoneCharging className="text-apple-blue" />}
          title={<>Exchange your smartphone,</>}
          subtitle={<>get – ₹67500.00 in credit towards a new one.*</>}
          color="text-apple-blue"
          index={1}
        />
        
        <StoreBenefit 
          icon={<AppleIcon className="h-8 w-8 text-orange-500" />}
          title={<>Customise your Mac.</>}
          color="text-orange-500"
          index={2}
        />
        
        <StoreBenefit 
          icon={<Smile className="text-purple-500" />}
          title={<>Make them yours.</>}
          subtitle={<>Engrave a mix of emoji, names and numbers for free.</>}
          color="text-purple-500"
          index={3}
        />
        
        <StoreBenefit 
          icon={<Truck className="text-green-500" />}
          title={<>Enjoy free delivery, or easy pickup</>}
          subtitle={<>from an Apple Store.</>}
          color="text-green-500"
          index={4}
        />
      </div>
    </section>
  );
};

export default AppleStoreDifference;
