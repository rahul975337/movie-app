import "./SearchBox.css";

import { Link } from "react-router-dom";

function SearchBox(props) {
  const { searchValue, onTextChange, onTypeChange } = props;
  return (
    <div className="search_box">
      <div className="search_input_field">
        <input
          type="text"
          value={searchValue}
          className="search_text"
          onChange={onTextChange}
        />
        <label className="search_text_label">Search Movie</label>
      </div>
      <select className="select " name="Type" id="cars" onChange={onTypeChange}>
        <option className="default_select" value="" selected>
          All Type
        </option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <Link to="/favourite">
        <button className="fav_btn">Favourites</button>
      </Link>
    </div>
  );
}

export default SearchBox;
