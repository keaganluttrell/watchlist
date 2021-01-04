import React from 'react';
import Nav from './Nav';
import View from './View';
import API from '../data/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
      topRated: [],
      forYou: [],
      yourList: [],
      searcedList: [],
      moviesByActor: [],
      currentItem: null,
      currentList: 'trending',
      pointer: 3,
      underLine: window.innerWidth < 751,
      //////////ITEM VIEW STATE/////////
      details: null,
      cast: [],
      similar: [],
      reviews: [],
      videoKey: '',
      sliderView: 'cast'
    }
  }

  pointerHandler(grid) {
    this.setState({ pointer: grid, underLine: window.innerWidth < 751 });
  }

  searchHandler(q) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${q}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          searchedList: data.results,
          currentList: 'searchedList',
          currentItem: null
        });
      });
  }

  getMoviesByActor(castId) {
    const movies = `https://api.themoviedb.org/3/person/${castId}/movie_credits?api_key=${API}&language=en-US`;
    fetch(movies)
      .then(response => response.json())
      .then(data => {
        this.setState({
          moviesByActor: data.cast.slice(0, 25),
          currentList: 'moviesByActor',
          currentItem: null,
          pointer: 2
        });
      });
  }

  listManager(listName = this.state.currentList) {
    this.setState({
      currentList: listName,
      currentItem: null
    });
  }

  saveMovieHandler(item) {
    const saved = this.state.yourList.some(entry => entry.id === item.id);
    if (saved) {
      const remove = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }
      fetch(`/yourList/${item.id}`, remove)
        .then(x => x.json())
        .then(data => {
          item.saved = false;
          this.setState({
            yourList: data
          });
        })
        .catch(err => console.log(err));
    } else {
      const post = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      }
      fetch('/yourList', post)
        .then(x => x.json())
        .then(data => {
          let newList = this.state.yourList.slice();
          newList.push(data[0]);
          this.setState({ yourList: newList });
        })
        .catch(err => console.log(err));
    }
  }

  setItemView(item) {
    let details, cast, similar, videoKey, reviews;
    const baseURL = `https://api.themoviedb.org/3/movie/${item.id}`;
    const detailsURL = `${baseURL}?api_key=${API}&language=en-US`;
    const castURL = `${baseURL}/credits?api_key=${API}&language=en-US`;
    const similarURL = `${baseURL}/similar?api_key=${API}&language=en-US&page=1`;
    const videoURL = `${baseURL}/videos?api_key=${API}&language=en-US`;
    const reviewsURL = `${baseURL}/reviews?api_key=${API}&language=en-US&page=1`;

    fetch(detailsURL)
      .then(x => x.json())
      .then(data => {
        details = data;
        return fetch(castURL);
      })
      .then(x => x.json())
      .then(data => {
        cast = data.cast.slice(0, 20);
        return fetch(similarURL)
      })
      .then(x => x.json())
      .then(data => {
        similar = data.results;
        return fetch(videoURL);
      })
      .then(x => x.json())
      .then(data => {
        videoKey = data.results[0].key
        return fetch(reviewsURL);
      })
      .then(x => x.json())
      .then(data => {
        reviews = data.results
        this.setState({
          currentItem: item,
          details: details,
          cast: cast,
          similar: similar,
          reviews: reviews,
          videoKey: videoKey
        })
      })
      .catch(err => console.log(err));
  }

  sliderToggle(listName) {
    this.setState({ sliderView: listName })
  }

  componentDidMount() {
    let yourList, trending, topRated, forYou, userListMovie;

    const baseURL = `https://api.themoviedb.org/3/movie/`;
    const trendingURL = `${baseURL}popular?api_key=${API}&language=en-US&page=1`;
    const topRatedURL = `${baseURL}top_rated?api_key=${API}&language=en-US&page=1`;

    fetch('/yourList')
      .then(x => x.json())
      .then(data => {
        yourList = data;
        userListMovie = data[0] ? data[0].id : '';
        return fetch(trendingURL);
      })
      .then(response => response.json())
      .then(data => {
        trending = data.results;
        return fetch(topRatedURL);
      })
      .then(response => response.json())
      .then(data => {
        topRated = data.results;
        return fetch(`${baseURL}${userListMovie}/recommendations?api_key=${API}&language=en-US&page=1`);
      })
      .then(response => response.json())
      .then(data => {
        forYou = userListMovie ? data.results : [];
        this.setState({
          yourList: yourList,
          trending: trending,
          topRated: topRated,
          forYou: forYou
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const searchHandler = this.searchHandler.bind(this);
    const listManager = this.listManager.bind(this);
    const saveMovieHandler = this.saveMovieHandler.bind(this);
    const setItemView = this.setItemView.bind(this);
    const pointerHandler = this.pointerHandler.bind(this);
    const getMoviesByActor = this.getMoviesByActor.bind(this);
    const sliderToggle = this.sliderToggle.bind(this);
    return (
      <>
        <Nav
          listManager={listManager}
          searchHandler={searchHandler}
          pointer={this.state.pointer}
          pointerHandler={pointerHandler}
          underLine={this.state.underLine}
          currentItem={this.state.currentItem}
          searchedList={this.state.searchedList}
        />
        <View
          currentList={this.state[this.state.currentList]}
          currentItem={this.state.currentItem}
          saveMovieHandler={saveMovieHandler}
          yourList={this.state.yourList}
          setItemView={setItemView}
          getMoviesByActor={getMoviesByActor}
          details={this.state.details}
          cast={this.state.cast}
          similar={this.state.similar}
          videoKey={this.state.videoKey}
          reviews={this.state.reviews}
          sliderToggle={sliderToggle}
          sliderView={this.state.sliderView}
        />
      </>
    );
  };
}

export default App;