import { Header, SearchBox } from "..";

import React from "react";

function HeaderContainer(props) {
  return (
    <div className="header_container">
      <Header />
      <SearchBox
        searchValue={props.searchQuery}
        onTextChange={props.onTextChange}
        onTypeChange={props.onTypeChange}
      />
    </div>
  );
}

export default HeaderContainer;
