import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1 className="header__icon">Airbnb</h1>
      <div className="header__center">
        <input type="text" />
      </div>
      <div className="header__right">
        <h3>Become a host</h3>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
