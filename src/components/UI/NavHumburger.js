import React from "react";

import styles from "./NavHumburger.module.css";

const NavHumburger = (props) => {
  return (
    <div
      className={
        props.hum
          ? styles["hum-container"]
          : `${styles["hum-container"]} ${styles.change}`
      }
      onClick={props.onClick}
    >
      <div className={styles["bar1"]}></div>
      <div className={styles["bar2"]}></div>
      <div className={styles["bar3"]}></div>
    </div>
  );
};

export default NavHumburger;
