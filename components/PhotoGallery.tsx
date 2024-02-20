/* eslint-disable @next/next/no-img-element */
import { dataImg } from '@/utils/dummyData';
import React, { useState } from 'react';

const PhotoGallery = ({ images }: any) => {
  const [selectedImg, setSelectedImg] = useState("")
  return (
    <div className="photo-gallery-container">
      <div style={{"display": "flex"}}>
        <img
          src={selectedImg || dataImg[0].image_url}
          alt={selectedImg || dataImg[0].image_url}
          className="photo-gallery-thumb-image"
        />
      </div>
      
      <div className='photo-gallery-image-list'>  
        {images.map((image: any, i: number) => (
          <img 
            key={i} 
            onClick={(e) => setSelectedImg(e.target.src)} 
            src={image.image_url} 
            alt={image.image_url} 
            className={`photo-gallery-image ${image.image_url === selectedImg ? "selected-photo" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;