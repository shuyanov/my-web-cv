import React from "react";
import styles from "./styles.module.scss";

import phone from "assets/linkIcon/phone.svg";
import git from "assets/linkIcon/git.svg";
import linkedIn from "assets/linkIcon/linkedIn.svg";
import tg from "assets/linkIcon/tg.svg";
import mail from "assets/linkIcon/mail.svg";

import { LinkCard } from "src/components/atoms/linkCard/LinkCard";
import { GIT_HUB, MAIL, TELEGRAM } from "constants/linkConstants";

export const ContactBlock = () => {
  return (
    <div className={styles.contactBlock}>
      <div className={styles.infoContainer}>
        <span className={styles.name}>Shuyanov Maxsim</span>
        <span className={styles.location}>location : Russian, Ivanovo</span>
        <span className={styles.experience}>1.5 years experience </span>
      </div>
      <div className={styles.linkedContainer}>
        {/* <LinkCard label={"phone"} src={phone} /> */}
        <LinkCard label={"gitHub"} src={git} href={GIT_HUB} target="_blank" />
        <LinkCard label={"mail"} src={mail} href={`mailto:${MAIL}`} />
        <LinkCard label={"telegram"} src={tg} href={TELEGRAM} target="_blank" />
        <LinkCard label={"linkedin"} src={linkedIn} />
      </div>
    </div>
  );
};
