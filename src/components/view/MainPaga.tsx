import styles from "./styles.module.scss";
import { NavBar } from "../cells/navBar/navBar";
import { YourselfBlock } from "../cells/yourselfBlock/YourselfBlock";

export const MainPage = () => {
  return (
    <div className={styles.bodyContainer}>
      <NavBar />
      <YourselfBlock />
    </div>
  );
};
