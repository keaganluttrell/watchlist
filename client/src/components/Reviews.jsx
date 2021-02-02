import React from 'react';
import ReviewItem from './ReviewItem';

const Reviews = ({ reviews }) => {
  if (reviews.length < 1) {
    return <></>
  }

  return (
    <div className="review-container">
      <div className="review-container-H">REVIEWS</div>
      {reviews.map((item, i) => {
        return <ReviewItem item={item} key={item.id} />
      })}
    </div>
  )
}

export default Reviews;