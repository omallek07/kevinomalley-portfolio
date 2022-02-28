import React from "react";
import Image from "next/image";
import styles from "./profileShot.module.css";

const ProfileShot = ({ width, height, rounded, bordered }) => {
  return (
    <Image
      className={`${rounded && styles.rounded} ${bordered && styles.bordered}`}
      src="/static/KevinProfile2022.jpg"
      height={height}
      width={width}
      alt="Kevin O'Malley"
    />
  );
};

export default ProfileShot;
