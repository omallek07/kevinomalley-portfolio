import React from "react";
import styles from "./button.module.css";

const Button = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button onClick={handleOnClick} className={styles.button}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
