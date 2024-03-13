import styles from "./style.module.scss";

type TNavBar = {
  label: string;
  src: string;
  href?: string;
  target?: string;
};

export const LinkCard = ({ label: lable, src, href, target }: TNavBar) => {
  return (
    <div className={styles.linkCard}>
      <img className={styles.imgAvatar} src={src} />
      <a href={href} target={target}>
        {lable}
      </a>
    </div>
  );
};
