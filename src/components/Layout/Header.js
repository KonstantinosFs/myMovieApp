import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavHumburger from "../UI/NavHumburger";

import styles from "./Header.module.css";
import moviesImage from "../../assets/moviesLogo.png";

const NavbarItems = (props) => {
  const classes = styles.card + " " + props.className;
  return (
    <ul className={classes}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link>
      </li>
    </ul>
  );
};

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <NavHumburger onClick={props.onClick} hum={props.hum} />
      <NavbarItems className={styles["sidebar-items"]} />
    </div>
  );
};

const Header = () => {
  const [isHumActive, setHumActive] = useState("false");
  const toggleHamburgerHandler = (event) => {
    setHumActive(!isHumActive);
  };

  return (
    <header>
      <nav>
        <div className={styles["movies-logo"]}>
          <img src={moviesImage} alt="Movies Logo" />
        </div>
        <NavHumburger onClick={toggleHamburgerHandler} hum={isHumActive} />
        {isHumActive ? (
          <NavbarItems />
        ) : (
          <Sidebar onClick={toggleHamburgerHandler} hum={isHumActive} />
        )}
      </nav>
    </header>
  );
};

export default Header;
