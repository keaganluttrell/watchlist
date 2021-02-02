import React from 'react';

const Rating = ({ voteAvg }) => {
  return (
    <div className="star-ratings">
      <div className="star-ratings-top"
        style={{ width: String(voteAvg * 10) + '%' }}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <div className="star-ratings-bottom">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  )
}

export default Rating;

