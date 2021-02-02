import React from 'react';
import SlideItem from './SlideItem';


const Slider = ({
  slideList,
  listName,
  sliderToggle,
  setItemView,
  getMoviesByActor
}) => {
  const castColor = listName === 'cast' ? "gray" : "rgba(106, 218, 255, 0.3)";
  const simColor = listName === 'similar' ? "gray" : "rgba(106, 218, 255, 0.3)";


  var slideItem;
  if (slideList.length < 1) {
    slideItem = (<div id="noSlides">
      No {listName === 'cast' ? 'actors listed' : 'similar films'} ...
    </div>)
  } else {
    slideItem = slideList.map((item) => {
      if (item.profile_path || item.poster_path) {
        return <SlideItem
          item={item}
          key={item.id}
          setItemView={setItemView}
          getMoviesByActor={getMoviesByActor}
        />
      }
    });
  }

  return (
    <div className="slider">
      <div className="slider-header">

        <div className="slider-title" id="slider-cast"
          style={{ backgroundColor: castColor }}
          onClick={() => sliderToggle('cast')}>
          CAST
        </div>

        <div className="slider-title" id="slider-sim"
          style={{ backgroundColor: simColor }}
          onClick={() => sliderToggle('similar')}>
          SIMILAR
        </div>

      </div>

      <div className="slide-bar">
        {slideItem}
      </div>
    </div>
  )
}

export default Slider;