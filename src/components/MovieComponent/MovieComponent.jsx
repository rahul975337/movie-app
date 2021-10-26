import "./MovieComponent.css";

import { AiOutlineHeart } from "react-icons/ai";
import React from "react";

function MovieComponent(props) {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <div className="movie_container">
      <span className="movie_name">{Title}</span>
      <img src={Poster} alt={Title} className="image" />
      <div className="info_row">
        <AiOutlineHeart className="fav" />
        <div className="detail">Read More</div>
      </div>
    </div>
  );
}

export default MovieComponent;
