import React from "react";
import sun from "../../assets/sun.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <a href="#">My projects</a>
      <a href="#">My experience</a>
      <img src={sun} />
    </header>
  );
};
