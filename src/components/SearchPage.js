import React from "react";
import { Button } from "@material-ui/core";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august 2 guests</p>
        <h1>stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        description="1 guest. 1 bedroom. 1  bed 1.5 shared bathroom WIFI Kitchen Free Parking Washing Machine"
        location="Private room at the center of london"
        title="Stay at this special house"
        star="4.73"
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1588557132645-ff567110cafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        description="1 guest. 1 bedroom. 1  bed 1.5 shared bathroom WIFI Kitchen Free Parking Washing Machine"
        location="Private room at the center of london"
        title="Luxry is the faith of happiness"
        star="4.3"
        price="$50/night"
        total="$217 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1520984032042-162d526883e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        description="1 guest. 1 bedroom. 1  bed 1.5 shared bathroom WIFI Kitchen Free Parking Washing Machine"
        location="Private room at the center of london"
        title="Stay In this Sweet sentered nova house"
        star="4.9"
        price="$45/night"
        total="$200 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        description="1 guest. 1 bedroom. 1  bed 1.5 shared bathroom WIFI Kitchen Free Parking Washing Machine"
        location="Private room at the center of london"
        title="Aqua Safari is Jaming with beauty"
        star="4.2"
        price="$65/night"
        total="$350 total"
      />
    </div>
  );
}

export default SearchPage;
