import Image from 'next/image';
import React from 'react';

const BrandLogos = () => {
  const brands = [
    {
      name: 'Weybee',
      imgUrl: 'https://weybee.com/wp-content/themes/weybee/assets/img/weybee-logo.svg',
      color: '#FF6B6B'
    },
    {
      name: 'Future Proof Technology',
      imgUrl: 'https://futureprooftech.com/wp-content/themes/futureproof/assets/images/logo.svg',
      color: '#4D4D4D'
    },
    {
      name: 'DigitalClicks',
      imgUrl: 'https://digitalclicks.ae/wp-content/uploads/2019/01/logo.png',
      color: '#4A90E2'
    },
    {
      name: 'Netflix',
      imgUrl: 'https://assets.nflxext.com/en_us/layout/ecweb/netflix-logo.svg',
      color: '#E50914'
    },
    {
      name: 'SpyCloud',
      imgUrl: 'https://spycloud.com/wp-content/uploads/2019/03/spycloud-logo.svg',
      color: '#00A0DC'
    },
    {
      name: 'Upwork',
      imgUrl: 'https://www.upwork.com/static/assets/TopNavSsi/upwork-logo.svg',
      color: '#6FDA44'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 bg-white">
      <h2 className="text-center text-xl text-gray-600 mb-12">
        Trusted by 20,000+ developers
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-12 px-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group relative transition-all duration-300 ease-in-out cursor-pointer"
          >
            <div className="w-32 h-16 flex items-center justify-center transform transition-all duration-300 group-hover:-translate-y-2">
              <Image
                src="/api/placeholder/120/40"
                alt={`${brand.name} logo`}
                className="w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                style={{
                  '--hover-color': brand.color
                } as React.CSSProperties}
              />
            </div>
            <div 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 group-hover:w-full transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--hover-color)',
                opacity: 0,
                transition: 'opacity 0.3s, width 0.3s',
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;