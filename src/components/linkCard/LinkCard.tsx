import React from "react";
import styles from "./style.module.scss";

type TNavBar = {
  label: string;
  src: string;
};

export const LinkCard = ({ label: lable, src }: TNavBar) => {
  return (
    <div className={styles.linkCard}>
      <img className={styles.imgAvatar} src={src} />
      <a>{lable}</a>
    </div>
  );
};
