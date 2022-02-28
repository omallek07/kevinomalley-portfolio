import React from "react";
import Image from "next/image";
import styles from "./profileShot.module.css";

const ProfileShot = () => {
  return (
    <Image
      className={styles.profileShot}
      src="/static/KevinProfile2022.jpg"
      height={120}
      width={80}
      alt="Kevin O'Malley"
    />
  );
};

export default ProfileShot;
