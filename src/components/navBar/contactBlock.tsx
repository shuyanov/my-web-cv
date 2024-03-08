import React from "react";
import styles from "./styles.module.scss";

import phone from "../../assets/linkIcon/phone.svg";
import git from "../../assets/linkIcon/git.svg";
import linkedIn from "../../assets/linkIcon/linkedIn.svg";
import tg from "../../assets/linkIcon/tg.svg";
import mail from "../../assets/linkIcon/mail.svg";
import { LinkCard } from "../linkCard/LinkCard";

export const ContactBlock = () => {
  return (
    <div className={styles.contactBlock}>
      <span>Shuyanov Maxsim</span>
      <span>location : Russian, Ivanovo</span>
      <span>1.5 years experience </span>
      <div className={styles.linkedContainer}>
        <LinkCard label={"phone"} src={phone} />
        <LinkCard label={"gitHub"} src={git} />
        <LinkCard label={"mail"} src={mail} />
        <LinkCard label={"telegram"} src={tg} />
        <LinkCard label={"linkedin"} src={linkedIn} />
      </div>
    </div>
  );
};
