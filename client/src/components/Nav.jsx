import React, { Suspense } from 'react';
import Logo from './Logo';
import Search from './Search';
const Nav = props => {
  const img = (<img src="/spy2.png" height="50px" />);
  return (
    <div id="nav">
      <div id="logo" onClick={() => {
        props.listManager();
      }}>
        {img}
      </div>
      <Search
        listManager={props.listManager}
        searchedList={props.searchedList}
        searchHandler={props.searchHandler}
        pointerHandler={props.pointerHandler}
      />
      <div
        className="nav-btn"
        id="trending"
        style={{
          borderBottom: props.underLine && props.pointer === 3 ?
            '1px solid rgba(245, 245, 245, 0.9)' : 'inherit'
        }}

        onClick={() => {
          props.pointerHandler(3);
          props.listManager('trending');
        }}>
        TRENDING
        </div>
      <div
        className="nav-btn"
        style={{
          borderBottom: props.underLine && props.pointer === 4 ?
            '1px solid rgba(245, 245, 245, 0.9)' : 'inherit'
        }}
        id="top-rated"
        onClick={() => {
          props.pointerHandler(4);
          props.listManager('topRated')
        }}>
        TOP RATED
      </div>

      <div
        className="nav-btn"
        style={{
          borderBottom: props.underLine && props.pointer === 5 ?
            '1px solid rgba(245, 245, 245, 0.9)' : 'inherit'
        }}
        id="for-you"
        onClick={() => {
          props.pointerHandler(5);
          props.listManager('forYou')
        }}>
        FOR YOU
          </div>
      <div
        className="nav-btn"
        style={{
          borderBottom: props.underLine && props.pointer === 6 ?
            '1px solid rgba(245, 245, 245, 0.9)' : 'inherit'
        }}
        id="your-list"
        onClick={() => {
          props.pointerHandler(6);
          props.listManager('yourList')
        }}>
        YOUR LIST
          </div>
      <div id="pointer"
        style={{
          gridColumn: props.pointer,
          margin: props.pointer === 2 ? '0px 25px' : '0 auto',
        }}>
        &#x025B4;
        </div>
    </div>
  );
}

export default Nav;