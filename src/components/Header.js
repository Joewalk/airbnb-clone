import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/564x/b1/99/5c/b1995c5e33ea197df84c9e0045b0347a.jpg"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__right">
        <h3>Become a host</h3>
        <KeyboardArrowDownIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
