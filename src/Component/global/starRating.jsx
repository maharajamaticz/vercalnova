"use client"
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function StarRating({rateVal=4,readOnly}) {
  const [rating, setRating] = useState(rateVal); 

  const handleRating = (rate) => {
    setRating(rate); 
    console.log(`Rating: ${rate}`);
  };
  
  return (
    <div>
      <Rating
        onClick={handleRating}
        ratingValue={rating} 
        size={35} 
        label
        transition
        fillColor="orange"
        emptyColor="gray"
        className="foo" 
        initialValue={rateVal}
        readonly={readOnly}
        
      />
    </div>
  );
}
