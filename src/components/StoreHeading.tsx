
import React, { useEffect, useRef } from 'react';

const StoreHeading = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, observerOptions);
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  return (
    <div className="container-apple py-24 mt-12">
      <div className="flex flex-col items-start">
        <h1 
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-apple-gray-600 opacity-0 translate-y-4 transition-all duration-1000 ease-out"
        >
          Store. <span className="font-normal text-apple-gray-500">The best way to buy the</span>
        </h1>
        <h2 
          ref={subtitleRef} 
          className="text-5xl sm:text-6xl lg:text-7xl font-normal text-apple-gray-500 mt-1 opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-200"
        >
          products you love.
        </h2>
      </div>
    </div>
  );
};

export default StoreHeading;
