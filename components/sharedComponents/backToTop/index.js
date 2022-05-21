import React from "react";
import { useEffect, useState } from "react";
import styles from "./backToTop.module.css";

const BackToTop = ({ showButton, scrollToTopHandler }) => {
  return (
    <>
      {showButton && (
        <div onClick={scrollToTopHandler} className={styles.backToTop}>
          &#8679;
        </div>
      )}
    </>
  );
};

export default BackToTop;
