
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AppleIcon } from './icons/AppleIcon';
import { ShoppingBagIcon, SearchIcon, MapPinIcon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-white/80 shadow-sm" : "bg-white/90"
      )}
    >
      <div className="container-apple h-12 flex items-center justify-between">
        <nav className="w-full flex items-center justify-between">
          <ul className="hidden md:flex items-center justify-center space-x-9 text-xs text-apple-gray-600 font-medium">
            <li>
              <a href="/" className="flex items-center justify-center hover:text-apple-blue transition-colors">
                <AppleIcon className="h-4 w-4" />
              </a>
            </li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">Store</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">Mac</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">iPad</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">iPhone</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">Watch</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">AirPods</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">TV & Home</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">Entertainment</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">Accessories</a></li>
            <li><a href="/" className="hover:text-apple-blue transition-colors">Support</a></li>
          </ul>
          
          <div className="md:hidden flex-1">
            <a href="/" className="flex items-center justify-center hover:text-apple-blue transition-colors">
              <AppleIcon className="h-5 w-5 mx-auto" />
            </a>
          </div>
          
          <div className="flex items-center space-x-5">
            <button className="text-apple-gray-600 hover:text-apple-blue transition-colors">
              <SearchIcon className="h-4 w-4" />
            </button>
            <button className="text-apple-gray-600 hover:text-apple-blue transition-colors">
              <ShoppingBagIcon className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
