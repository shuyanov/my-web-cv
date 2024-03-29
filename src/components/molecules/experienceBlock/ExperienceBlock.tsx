import { ReactChild } from "react";
import styles from "./styles.module.scss";

type TExperienceBlock = {
  src: string;
  text: ReactChild;
};

export const ExperienceBlock = ({ src, text }: TExperienceBlock) => {
  return (
    <div className={styles.experienceBlock}>
      <img src={src} />
      {text}
    </div>
  );
};
