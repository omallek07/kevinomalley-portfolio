import React from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <section className={styles.portfolioWrapper}>
        <Image
          src="/static/KevinOMalleyResume2022.jpg"
          height={2400}
          width={1800}
          priority
          alt="Kevin O'Malley Portfolio"
        />
      </section>
    </>
  );
};

export default Portfolio;
