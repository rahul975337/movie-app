import "./App.css";

import { Filter, Header, SearchBox } from "./components";
import React, { useState } from "react";

import Axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App">
      <div className="header_container">
        <Header />
        <SearchBox />
      </div>

      <div className="divider" />
    </div>
  );
}

export default App;
