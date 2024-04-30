import React from "react";
import { Header } from "../cells/header/header";
import cnet from "assets/iconCompany/cnet.svg";
import styles from "./styles.module.scss";
import { Description } from "../atoms/description/Description";

export const Cnet = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.experiencePage}>
        <div className={styles.headerExperiencePage}>
          <img src={cnet} />
          <h1>C.NET</h1>
        </div>
        <div>
          <Description
            title={"Стек технологий:"}
            text={
              "React Ts/Js, WebPack, Axios, React router dom, React boostrap, Scss."
            }
          />
          <Description title={"Должность:"} text={"Frontend developer."} />
          <Description
            title={"Что входило в мои обязанности:"}
            text={
              "Cоздание новых фич, анализ технических задач, оценка задач по времени."
            }
          />
        </div>
        <div className={styles.moreInfo}>
          <span>
            В рамках внутреннего проекта я активно разрабатывал и внедрял ряд
            новых функциональностей / фич.
            <br /> Например: создание динамических таблиц, работа с формами,
            датами и временем.
            <br /> Работа велась в стиле pixel perfect.
          </span>
        </div>
      </div>
    </div>
  );
};
