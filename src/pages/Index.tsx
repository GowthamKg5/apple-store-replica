
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import StoreHeading from '@/components/StoreHeading';
import ProductCategory from '@/components/ProductCategory';
import LatestProduct from '@/components/LatestProduct';
import AppleHelp from '@/components/AppleHelp';
import AppleHelpOptions from '@/components/AppleHelpOptions';
import AppleStoreDifference from '@/components/AppleStoreDifference';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          element.classList.add('opacity-100');
          element.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-12">
        <StoreHeading />
        <AppleHelp />
        
        {/* Product Categories */}
        <section className="container-apple py-10">
          <div className="product-grid justify-items-center">
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666" 
              title="Mac"
              delay={100}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692971740452" 
              title="iPhone"
              delay={150}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437" 
              title="iPad"
              delay={200}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1693703822208" 
              title="Apple Watch"
              delay={250}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885" 
              title="AirPods"
              delay={300}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" 
              title="AirTag"
              delay={350}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783378000" 
              title="Apple TV 4K"
              delay={400}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654" 
              title="HomePod"
              delay={450}
            />
            <ProductCategory 
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692803114952" 
              title="Accessories"
              delay={500}
            />
          </div>
        </section>
        
        {/* Latest Products Section */}
        <section className="container-apple py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-apple-gray-600 opacity-0 translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
              The latest. <span className="font-normal text-apple-gray-500">Take a look at what's new right now.</span>
            </h2>
          </div>
          
          <div className="latest-products-grid">
            <LatestProduct 
              preOrderText="PRE-ORDER NOW"
              title="MacBook Air"
              withIntelligence={true}
              price="₹99900.00*"
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-15-cto-hero-202411?wid=566&hei=388&fmt=jpeg&qlt=90&.v=1718143546301"
              index={0}
            />
            <LatestProduct 
              preOrderText="PRE-ORDER NOW"
              title="iPad Air"
              withIntelligence={true}
              price="₹59900.00*"
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-202310?wid=545&hei=550&fmt=jpeg&qlt=95&.v=1696878474326"
              index={1}
            />
            <LatestProduct 
              preOrderText="PRE-ORDER NOW"
              title="iPhone 16 Pro"
              withIntelligence={true}
              price="₹119900.00*"
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-pro-family-select-202309?wid=488&hei=592&fmt=jpeg&qlt=95&.v=1717189745362"
              index={2}
            />
            <LatestProduct 
              preOrderText="PRE-ORDER NOW"
              title="iPad"
              withIntelligence={false}
              price="₹34900.00*"
              imageSrc="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-yellow-wifi?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670856089321"
              index={3}
            />
          </div>
        </section>
        
        {/* Help is here section */}
        <AppleHelpOptions />
        
        {/* The Apple Store difference section */}
        <AppleStoreDifference />
      </main>
    </div>
  );
};

export default Index;
