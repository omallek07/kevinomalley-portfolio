import React from "react";
import { useRouter } from "next/router";
import styles from "./button.module.css";

const GoBackBtn = () => {
  const router = useRouter();
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
};

export default GoBackBtn;
