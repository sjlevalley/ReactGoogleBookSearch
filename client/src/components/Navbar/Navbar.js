import React from "react";
// import { useAuth } from "../../util/auth";
import Nav from "./Nav";
import "./Nav.module.css";

function Navbar() {
  // const auth = useAuth();
  return (
    <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light border">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
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
