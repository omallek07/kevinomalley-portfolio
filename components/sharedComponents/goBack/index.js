import React from "react";
import Link from "next/link";
import styles from "./goBack.module.css";

const GoBack = () => {
  return (
    <div className={styles.goBackContainer}>
      <Link className={styles.goBack} href="/">
        Back to home
      </Link>
    </div>
  );
};

export default GoBack;
