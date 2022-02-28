import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ buttonText, link }) => {
  return (
    <div className={styles.buttonWrapper}>
      <Link href={link}>
        <button className={styles.button}>{buttonText}</button>
      </Link>
    </div>
  );
};

export default Button;
