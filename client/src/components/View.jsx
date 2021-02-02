import React from 'react';
import List from './List';
import ItemView from './ItemView';


const View = props => {
  if (props.currentItem) {
    return (
      <ItemView
        currentItem={props.currentItem}
        saveMovieHandler={props.saveMovieHandler}
        setItemView={props.setItemView}
        getMoviesByActor={props.getMoviesByActor}
        details={props.details}
        cast={props.cast}
        similar={props.similar}
        videoKey={props.videoKey}
        reviews={props.reviews}
        sliderToggle={props.sliderToggle}
        sliderView={props.sliderView}
        yourList={props.yourList}
      />
    );
  }
  return (
    <List
      list={props.currentList}
      saveMovieHandler={props.saveMovieHandler}
      yourList={props.yourList}
      setItemView={props.setItemView}
    />
  );
}

export default View;