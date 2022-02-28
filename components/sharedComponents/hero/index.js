import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroImage}>
      <Image
        src="/static/unsplash-code-landing.jpeg"
        height={400}
        width={700}
        alt="Landing Image"
      />
    </div>
  );
};

export default Hero;
