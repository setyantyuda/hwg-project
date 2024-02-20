/* eslint-disable @next/next/no-img-element */
import React from 'react';

const PhotoGallery = ({ images }: any) => {
  return (
    <div className="photo-gallery-container">
      {images.map((image: any, i: number) => (
        <img key={i} src={image.image_url} alt={image.title} className="photo-gallery-image" />
      ))}
    </div>
  );
};

export default PhotoGallery;