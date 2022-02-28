import React from "react";
import styles from "./footer.module.css";

import SocialContacts from "../../sharedComponents/socialContacts";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialContacts />
      <div className={styles.copyRight}>
        &#169; {new Date().getFullYear()} Kevin O'Malley
      </div>
    </footer>
  );
};

export default Footer;
