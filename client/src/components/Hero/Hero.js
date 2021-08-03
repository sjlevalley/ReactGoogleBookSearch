import React from "react";
import "./hero.css";



function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid m-2 border border-dark ">
      <div className="container heroText  p-4">
        <h1 className="heroText display-4 text-center ">React Google Books Search</h1>
        <p className="heroText lead text-center ">Search and Save Books</p>
      </div>
    </div>

  );
}

export default Hero;