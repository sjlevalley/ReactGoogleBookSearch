import React from "react";
import { useAuth } from "../../util/auth";
import Nav from "./Nav";
import "./Nav.module.css";

function Navbar() {
  const auth = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Nav className="navbar-brand" exact to="/">
            Google Books
        </Nav>
          <Nav to="/private">Private</Nav>
        </ul>
        {/* <ul className="navbar-nav nav2">
          <Nav to="/login">Login</Nav>
          <Nav to="/signup">Sign Up</Nav>
          <button onClick={() => auth.logout()}>Logout</button>
        </ul> */}


      </div>
    </nav>
  );
}

export default Navbar;
