import React from "react";
import Card from "./Card";
import Banner from "./Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src={
            "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          title={"Aqua Safari"}
          description={
            "Get out and strech your imagination Plan a different kind of getaway to uncover the hidden gems near you"
          }
        />
        <Card
          src={
            "https://images.unsplash.com/photo-1588557132645-ff567110cafd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          title={"Cape jam"}
          description={
            "Get out and strech your imagination Plan a different kind of getaway to uncover the hidden gems near you"
          }
        />
        <Card
          src={
            "https://images.unsplash.com/photo-1520984032042-162d526883e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          title={"Snow master"}
          description={
            "Get out and strech your imagination Plan a different kind of getaway to uncover the hidden gems near you"
          }
        />
      </div>
      <div className="home__section">
        <Card
          src={
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          title={"Las Vagas "}
          price={"$150/night"}
          description={
            "Get out and strech your imagination Plan a different kind of getaway to uncover the hidden gems near you"
          }
        />
        <Card
          src={
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          title={"Nova PLus"}
          price={"$75/night"}
          description={
            "Get out and strech your imagination Plan a different kind of getaway to uncover the hidden gems near you"
          }
        />
        <Card
          src={
            "https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
          title={"Atlantic Ocean"}
          price={"$330/night"}
          description={
            "Get out and strech your imagination Plan a different kind of getaway to uncover the hidden gems near you"
          }
        />
      </div>
    </div>
  );
}

export default Home;
