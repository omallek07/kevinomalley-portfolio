import React from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";
import Banner from "../../sharedComponents/banner";

const Portfolio = () => {
  return (
    <>
      <Banner title={"Check out my resume!"} />
      <div className={styles.portfolioWrapper}>
        <Image
          src="/static/PortfolioJPEG.jpg"
          height={700}
          width={500}
          alt="Kevin O'Malley Portfolio"
        />
      </div>
    </>
  );
};

export default Portfolio;