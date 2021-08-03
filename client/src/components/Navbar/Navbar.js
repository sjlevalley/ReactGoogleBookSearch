import React from "react";
// import { useAuth } from "../../util/auth";
import Nav from "./Nav";
import './navbar.css';
import "./Nav.module.css";

function Navbar() {
  // const auth = useAuth();
  return (
    <nav id="navbar" className="p-3 navbar navbar-expand-lg navbar-light m-2 border border-dark">
      <div className="collapse navbar-collapse" id="navbar">
        <ul id="navbar" className="navbar-nav">
          <Nav className="navbar-brand" exact to="/">
            Google Book Search
          </Nav>
          <Nav to="/private">Saved Books</Nav>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
