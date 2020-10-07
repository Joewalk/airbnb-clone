import { FavoriteBorder, Star } from "@material-ui/icons";
import React from "react";
import "./SearchResult.css";

function SearchResult({
  img,
  location,
  title,
  description,
  price,
  total,
  star,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="title" />
      <FavoriteBorder className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <Star className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h3>{price}</h3>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
