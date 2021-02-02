import React from 'react';
import Rating from './Rating';


const Item = ({ item, saveMovieHandler, yourList, setItemView }) => {
  const url = `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
  const overview = item.overview.length > 300 ?
    item.overview.slice(0, 350) + '. . .' : item.overview;
  const saved = yourList.some(entry => entry.id === item.id);
  return (
    <div className="item" >
      <img src={url} alt={item.title} />
      <div className="list-item-info">
        <div className="info-title"
          onClick={() => setItemView(item)}>
          {item.title}
          <Rating voteAvg={item.vote_average} />
          <span className="review-count">({item.vote_count})</span>
        </div>
        <div className="info-overview">{overview}</div>
        <div className="toggle-btn">
          <button
            type="button"
            className="toggle"
            onClick={() => { saveMovieHandler(item) }}>
            {saved ? 'REMOVE' : 'ADD'}
            {/* ADD ///////////////////////// */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;