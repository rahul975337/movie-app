import "./App.css";

import { Header, MovieComponent, SearchBox } from "./components";
import React, { useState } from "react";

import Axios from "axios";
import ModalPage from "./components/Modal/Modal";

const API_KEY = process.env.REACT_APP_API_KEY;
const movie = {
  Title: "Star Wars",
  Year: "1977",
  imdbID: "tt0076759",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};
function App() {
  return (
    <div className="App">
      <div className="header_container">
        <Header />
        <SearchBox />
      </div>
      <div className="divider" />

      <div className="movie_list_container">
        <MovieComponent movie={movie} />
        <MovieComponent movie={movie} />
        <MovieComponent movie={movie} />
        <MovieComponent movie={movie} />
        <MovieComponent movie={movie} />
      </div>
    </div>
  );
}

export default App;
