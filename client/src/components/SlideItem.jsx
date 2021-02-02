import React from 'react';
import Rating from './Rating';


const SlideItem = ({ item, setItemView, getMoviesByActor }) => {
  var img;
  var title;
  var subTitle;
  if (item.title) {
    img = `https://image.tmdb.org/t/p/w200${item.poster_path}`;
    title = item.title;
    subTitle = <Rating voteAvg={item.vote_average} />
  } else {
    img = `https://image.tmdb.org/t/p/w200${item.profile_path}`;
    title = item.name;
    subTitle = (<div className="SI-sub-title">{item.character}</div>);
  }

  return (
    <div
      className="slide-item"
      onClick={() => {
        if (item.title) {
          setItemView(item);
        } else {
          getMoviesByActor(item.id)
        }
      }}
    >
      <img src={img} alt={title} height="200px" width="130px" />
      <div className="SI-info" style={{ top: title.length > 40 ? "60%" : "70%" }}>
        <div className="SI-title">{title}</div>
        {subTitle}
      </div>
    </div>
  )
}

export default SlideItem;