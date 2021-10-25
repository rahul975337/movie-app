import "./SearchBox.css";

import { Filter } from "../index";
import React from "react";
import { Search } from "@material-ui/icons";

function SearchBox() {
  return (
    <div className="search_box">
      <div className="search_input_field">
        <input type="text" name="" id="" className="search_text" />
        <label className="search_text_label">Search Movie</label>
      </div>
      <Filter />
    </div>
  );
}

export default SearchBox;
