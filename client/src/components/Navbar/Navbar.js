import React from "react";
// import { useAuth } from "../../util/auth";
import Nav from "./Nav";
import './navbar.css';
import "./Nav.module.css";

function Navbar() {
  // const auth = useAuth();
  return (
    <nav id="navbar" className="p-3 navbar navbar-expand navbar-light m-2 border border-dark">
      <ul id="navbar" className="navbar-nav">
        <div id="navbar" className="col m-2">
          <Nav className="navbar-brand" exact to="/">
            Google Book Search
          </Nav>
        </div>
        <div id="navbar" className="col m-2">
          <Nav to="/private">Saved Books</Nav>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
