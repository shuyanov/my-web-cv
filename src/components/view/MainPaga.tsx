import React from "react";
import styles from "./styles.module.scss";
import { NavBar } from "../cells/navBar/navBar";

export const MainPage = () => {
  return (
    <div className={styles.bodyContainer}>
      <NavBar />
    </div>
  );
};
