import React from "react";
import { useRouter } from "next/router";
import styles from "./goBack.module.css";

const GoBack = () => {
  const router = useRouter();
  return (
    <div className={styles.goBackContainer}>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default GoBack;
