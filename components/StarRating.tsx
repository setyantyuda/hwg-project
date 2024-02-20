import React from 'react';

const StarRating = ({ rating }: any) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span 
      key={index}
      className="star"
      style={{
        color: index < rating ? '#ffc107' : '#ccc',
      }}
    >
      ★
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;