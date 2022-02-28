import React from "react";
import ProfileShot from "../../sharedComponents/profileShot";
import styles from "./home.module.css";

const AboutMe = () => {
  const aboutMeText = "Hello everyone!";
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.profileShotWrapper}>
        <ProfileShot />
      </div>
      <div>
        <p>{aboutMeText}</p>
      </div>
    </div>
  );
};

export default AboutMe;
