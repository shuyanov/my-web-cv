import React from "react";
import { Header } from "../cells/header/header";
import dt from "assets/iconCompany/dt.svg";
import styles from "./styles.module.scss";
import { Description } from "../atoms/description/Description";

export const Digitable = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.experiencePage}>
        <div className={styles.headerExperiencePage}>
          <img src={dt} />
          <h1>Digitable</h1>
        </div>
        <div>
          <Description
            title={"Стек технологий:"}
            text={
              "React Ts, php, WebPack, Vite, Axios, React router dom, Scss, StoryBook."
            }
          />
          <Description title={"Должность:"} text={"Frontend developer."} />
          <Description
            title={"Что входило в мои обязанности:"}
            text={
              "Оценка задач по времени, разработка внутренней библиотеки компонентов. Интеграция микрофронтеда и переписыванием PHP кода на JSX, мигрировал код на сборщик Vite."
            }
          />
        </div>
        <div className={styles.moreInfo}>
          <span>
            По началу я разрабатывал внутреннюю библиотеку компонентов. После
            этого Занимался интеграцией микрофронтеда и переписыванием PHP кода
            на JSX так же там мигрировал код на сборщик Vite. Занимался
            декомпозицией задач, давал оценку задачам, проводил meeting и retro
            встречи
            <br /> Работа велась в стиле pixel perfect.
          </span>
        </div>
      </div>
    </div>
  );
};
