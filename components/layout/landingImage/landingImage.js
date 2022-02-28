import React from "react";
import Image from "next/image";
import styles from "./landingImage.module.css";

const LandingImage = () => {
  return (
    <Image
      style={styles.landingImage}
      src="/static/unsplash-code-landing.jpeg"
      height={500}
      width={500}
      alt="Landing Image"
    />
  );
};

export default LandingImage;
