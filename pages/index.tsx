import React from 'react';
import Autocomplete from '../components/AutoComplete';
import PhotoGallery from '../components/PhotoGallery';
import ImageCarousel from '../components/ImageCarousel';
import Tooltip from '../components/Tooltip';
import StarRating from '../components/StarRating';
import { dataImg } from '@/utils/dummyData';


const Home = () => {
  return (
    <div className='container'>
      <h1>HW Group Project</h1>

      <h3>Auto Complete</h3>
      <Autocomplete options={dataImg} />

      <h3>Photo Gallery</h3>
      <PhotoGallery images={dataImg} />

      <h3>Image Carousel</h3>
      <ImageCarousel images={dataImg} />

      <h3>Tooltip</h3>
      <Tooltip text="This is a tooltip">
        <button className='tooltip-child'>Hover me</button>
      </Tooltip>

      <h3>Star Rating</h3>
      {dataImg.map((item: any, i: number) => (
        <div key={i} className='star-rating-container'>
          <p>{item.title}</p>
          <span>Rating: </span><StarRating rating={item.rating} />
        </div>
      ))}

      <h1>Thank you HW Group, for the opportunity!</h1>
    </div>
  );
};

export default Home;