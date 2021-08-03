import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ to, exact = false, children }) {
  return (
    <li id="navbar">
      <NavLink id="navbar" className="nav-link m-2 rounded-pill" exact={exact} to={to} activeClassName={styles.active}>
        {children}
      </NavLink>
    </li>
  );
}
export default Nav;
