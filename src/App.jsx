import "./App.css";

import { Header, MovieComponent, MovieInfo, SearchBox } from "./components";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Axios from "axios";
import HeaderContainer from "./components/Header/HeaderContainer";
import MovieList from "./components/MovieComponent/MovieList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [timeoutId, setTimeoutId] = useState();
  // fetch data using axios

  const fetchDataWithSearch = async (searchString, typeQuery) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?type=${typeQuery}&s=${searchString}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    setMovieList(response.data.Search);
  };
  const onTextChange = (e) => {
    setSelectedMovie("");
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(
      () => fetchDataWithSearch(e.target.value, type),
      400
    );

    setTimeoutId(timeout);
  };
  const onTypeChange = (e) => {
    setSelectedMovie("");
    fetchDataWithSearch(searchQuery, e.target.value);
    setType(e.target.value);
  };
  return (
    <Router>
      <div className="App">
        <HeaderContainer
          searchQuery={searchQuery}
          onTextChange={onTextChange}
          onTypeChange={onTypeChange}
        />
        <div className="divider" />
        {/* MOVIE INFO */}
        {selectedMovie && (
          <MovieInfo
            selectedMovie={selectedMovie}
            onMovieSelect={setSelectedMovie}
          />
        )}
        {/* MOVIES LIST */}
        <MovieList movieList={movieList} setSelectedMovie={setSelectedMovie} />
        {/* <div className="movie_list_container">
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={setSelectedMovie}
              />
            ))
          ) : (
            <h1>Search for movies</h1>
          )}
        </div> */}
      </div>
    </Router>
  );
}

export default App;
