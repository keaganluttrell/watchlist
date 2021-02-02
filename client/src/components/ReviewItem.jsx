import React from 'react';
import Rating from './Rating';
import Moment from 'react-moment';

const ReviewItem = ({ item }) => {
  var url = 'https://image.tmdb.org/t/p/w45/klZ9hebmc8biG1RC4WmzNFnciJN.jpg';
  if (/http/.test(item.author_details.avatar_path)) {
    url = item.author_details.avatar_path.slice(1);
  } else if (item.author_details.avatar_path) {
    url = `https://image.tmdb.org/t/p/w45${item.author_details.avatar_path}`;
  }
  var body = item.content;
  if (item.content.length > 900) {
    body = item.content.slice(0, 900) + '. . . click to display full review'
  }

  return (
    <div className="review-item">

      <div className="review-header">
        <img src={url} alt="avatar" height="40px" />
        <div className="author">{item.author}</div>
        <Rating voteAvg={item.author_details.rating} />
      </div>

      <div className="review-content">
        <div className="RC-body">
          {body}
        </div>
        <div className="time">
          <Moment fromNow ago>{item.created_at}</Moment> ago
        </div>
      </div>
    </div>
  )
}

export default ReviewItem;