import "./Home.css";

import { HeaderContainer, MovieInfo, MovieList } from "..";
import React, { useEffect, useState } from "react";

import Axios from "axios";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [favourites, setFavourites] = useState([]);
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
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    let newFavouriteList = [...favourites, movie];
    let filteredFavourites = [...new Set(newFavouriteList)];

    setFavourites(filteredFavourites);
    saveToLocalStorage(filteredFavourites);
  };

  return (
    <div className="App">
      {/* HEADER */}
      <HeaderContainer
        showSearch={true}
        searchQuery={searchQuery}
        onTextChange={onTextChange}
        onTypeChange={onTypeChange}
      />
      {/* DIVIDER */}
      <div className="divider" />

      {/* MOVIE INFO */}
      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          onMovieSelect={setSelectedMovie}
        />
      )}
      {/* MOVIES LIST */}
      <MovieList
        movieList={movieList}
        setSelectedMovie={setSelectedMovie}
        addFavouriteMovie={addFavouriteMovie}
      />
    </div>
  );
}

export default Home;
