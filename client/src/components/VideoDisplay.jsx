import React from 'react';


const View = ({ currentItem, video }) => {
  const poster = `https://image.tmdb.org/t/p/w500${currentItem.poster_path}`
  return (
    <div id="video-display">
      <div id="img-left">
        <img src={poster} />
      </div>
      <iframe
        src={video}
        title={currentItem.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write;
       encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
      <div id="img-right">
        <img src={poster} />
      </div>
    </div>
  );
}

export default View;