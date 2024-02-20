/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const ImageCarousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-carousel-container">
      <button onClick={handlePrev} className="image-carousel-button">
        &lt;
      </button>
      <div className="carousel-images-container">
        <img 
          src={images[currentIndex - 1]?.image_url}
          alt={images[currentIndex].title}
          className="image-carousel-image"
        />
        <img 
          src={images[currentIndex]?.image_url}
          alt={images[currentIndex].title}
          className="image-carousel-image"
        />
        <img 
          src={images[currentIndex + 1]?.image_url}
          alt={images[currentIndex].title}
          className="image-carousel-image"
        />
      </div>
      <button onClick={handleNext} className="image-carousel-button">
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;