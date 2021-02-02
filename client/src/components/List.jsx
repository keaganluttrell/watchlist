import React from 'react';
import Item from './Item';

const List = ({ list, saveMovieHandler, yourList, setItemView }) => {
  return (
    <div className="list">
      {list.map(item => {
        if (item.backdrop_path) {
          return <Item
            item={item}
            key={item.id}
            saveMovieHandler={saveMovieHandler}
            yourList={yourList}
            setItemView={setItemView}
          />
        }
      })}
    </div>
  );
}

export default List;