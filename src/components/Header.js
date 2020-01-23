import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../App.module.css";
import Container from "./Container";

const Header = () => {
  const bold = { fontWeight: "bold" };
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.nav}>
          <li>
            <NavLink exact to="/" activeStyle={bold}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" activeStyle={bold}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={bold}>
              About
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Header;
