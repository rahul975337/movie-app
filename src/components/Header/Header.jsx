import "./Header.css";

import { Link } from "react-router-dom";
import React from "react";

const icon =
  "https://apkplz.net/storage/images/com/artium/app/com.artium.app_1.png";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="app_icon_name">
          <img src={icon} alt="" className="app_icon" />
          <p className="app_name">Artium Theater</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
