import styles from "./style.module.scss";

type TDescription = {
  title: string;
  text: string;
};

export const Description = ({ text, title }: TDescription) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
