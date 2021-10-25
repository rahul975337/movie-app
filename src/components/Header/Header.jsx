import "./Header.css";

import React from "react";

const icon =
  "https://apkplz.net/storage/images/com/artium/app/com.artium.app_1.png";
function Header() {
  return (
    <div className="header">
      <div className="app_icon_name">
        <img src={icon} alt="" className="app_icon" />
        <p className="app_name">Artium Movie App</p>
      </div>
    </div>
  );
}

export default Header;
