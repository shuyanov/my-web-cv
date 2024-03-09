import React from "react";
import shuyanov from "assets/shuyanoov.png";
import styles from "./styles.module.scss";
import digitable from "assets/iconCompany/dt.svg";
import egg from "assets/iconCompany/egg.svg";
import cnet from "assets/iconCompany/cnet.svg";
import { ContactBlock } from "molecules/contactBlock/contactBlock";
import { ExperienceBlock } from "molecules/experienceBlock/ExperienceBlock";

export const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <img src={shuyanov} />
      <ContactBlock />
      <div className={styles.experienceContainer}>
        <ExperienceBlock
          src={digitable}
          text={
            <span className={styles.text}>
              Digitable — Frontend разработчик
              <br /> Продолжительность: 1 год
              <br /> Стек: TypeScript, React, StoryBook, WebPack
              <br /> Команда из 4 человек
            </span>
          }
        />
        <ExperienceBlock
          src={cnet}
          text={
            <span>
              С.NET — Frontend разработчик
              <br />
              Продолжительность: 4 Месяца
              <br />
              Stack: TypeScript, React, Axios, Redux Toolkit, WebPack
              <br />
              Команда более 10 человек
            </span>
          }
        />
        <ExperienceBlock
          src={egg}
          text={
            <span>
              Garpix — Frontend разработчик
              <br />
              Продолжительность: 2 Месяца
              <br />
              Команда более 10 человек
              <br />
              Стек: TypeScript, React, StoryBook, vite
            </span>
          }
        />
      </div>
    </nav>
  );
};
