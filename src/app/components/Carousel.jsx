"use client";

import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/shopee1010-voucher.png',
    '/images/carousel2.png',
    '/images/carousel3.png',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] h-[500px] mx-auto my-12"> {/* Set max-width and centralize the carousel */}
      <div className="relative h-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain" // object-contain to fit the image properly
        />
      </div>

      {/* Previous Button */}
      <button
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 shadow-lg z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        aria-label="Next slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 shadow-lg z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-white opacity-100' : 'bg-gray-300 opacity-50'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
