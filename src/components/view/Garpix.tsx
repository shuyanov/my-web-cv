import { Header } from "../cells/header/header";
import egg from "assets/iconCompany/egg.svg";
import styles from "./styles.module.scss";
import { Description } from "../atoms/description/Description";

export const Garpix = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.experiencePage}>
        <div className={styles.headerExperiencePage}>
          <img src={egg} />
          <h1>Garpix</h1>
        </div>
        <div>
          <Description
            title={"Стек технологий:"}
            text={"React Ts, Redux, Vite, Axios, Scss."}
          />
          <Description title={"Должность:"} text={"Frontend developer."} />
          <Description
            title={"Что входило в мои обязанности:"}
            text={"Поддержка кода, исправление багов, реализация новых фич"}
          />
        </div>
        <div className={styles.moreInfo}>
          <span>
            Занимался разработкой динамических форм, столкнулся с большим
            коллективом, но очень плохим менеджментом и токсичностью поэтому от
            туда ушел.
          </span>
        </div>
      </div>
    </div>
  );
};
