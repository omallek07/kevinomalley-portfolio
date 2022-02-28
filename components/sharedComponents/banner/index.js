import React from "react";
import styles from "./banner.module.css";

const Banner = ({ title, subtitle }) => {
  let titleRender;

  // For styling purposes, split title into individual spans if title is more than one word
  if (title.split(" ").length > 1) {
    titleRender = title
      .split(" ")
      .map((word, idx) => <span key={word + idx}>{word}</span>);
  } else {
    titleRender = <span>{title}</span>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{titleRender}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default Banner;
