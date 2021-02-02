import React from 'react';
import VideoDisplay from './VideoDisplay';
import Rating from './Rating';
import Slider from './Slider';
import Reviews from './Reviews';

const ItemView = (props) => {
  const video = `https://www.youtube.com/embed/${props.videoKey}`;
  const saved = props.yourList.some(entry => entry.id === props.currentItem.id);
  var genres;
  var runtime;
  if (props.details) {
    genres = props.details.genres.reduce((str, item, i, a) => {
      return i === a.length - 1 ?
        str += item.name : str += item.name + ', ';
    }, 'Genres: ');
    runtime = props.details.runtime;
  }
  return (
    <div id="item-view">
      <VideoDisplay
        currentItem={props.currentItem}
        video={video}
      />
      <div id="movie-details">
        <div id="movie-title">
          <div id="title">{props.currentItem.title}</div>
          <div className="toggle-btn" id="add-movie">
            <button
              type="button"
              className="toggle"
              onClick={() => props.saveMovieHandler(props.currentItem)}>
              {saved ? 'REMOVE' : 'ADD'}
              {/* ADD ///////////////////////// */}
            </button>
          </div>
        </div>
        <div id="movie-info">
          <Rating voteAvg={props.currentItem.vote_average} />
          <div id="vote-count">({props.currentItem.vote_count})</div>
          <div id="runtime">{runtime + ' min'}</div>
          <div id="year">{parseInt(props.currentItem.release_date)}</div>
        </div>
        <div id="genres">
          {genres}
        </div>
        <div id="movie-overview">{props.currentItem.overview}</div>
      </div>
      <Slider
        slideList={props[props.sliderView]}
        listName={props.sliderView}
        sliderToggle={props.sliderToggle}
        setItemView={props.setItemView}
        getMoviesByActor={props.getMoviesByActor}
      />
      <Reviews reviews={props.reviews} />
    </div>
  );
}

export default ItemView;