import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({ to, exact = false, children }) {
  return (
    <li>
      <NavLink className="nav-link" exact={exact} to={to} activeClassName={styles.active}>
        {children}
      </NavLink>
    </li>
  );
}
export default Nav;
