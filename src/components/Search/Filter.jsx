import "./Filter.css";

import React from "react";

function Filter() {
  return (
    <select className="select " name="Type" id="cars">
      <option className="default_select" value="" selected>
        Type
      </option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
}

export default Filter;
