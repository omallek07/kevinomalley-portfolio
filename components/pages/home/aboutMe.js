import React from "react";
import ProfileShot from "../../sharedComponents/profileShot";
import styles from "./home.module.css";

const AboutMe = () => {
  const aboutMeText =
    "Hello everyone! Thank you for visiting my site. A little about me: I am a professional frontend developer. I am always curius to learn more and dig into the roots of problems to find the solution. I currently reside in Chicago with my wife and my two dachshunds. Please check out my blog posts, projects, or resume if interested.";
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.profileShotWrapper}>
        <ProfileShot />
      </div>
      <div className={styles.textContainer}>
        <p>{aboutMeText}</p>
      </div>
    </div>
  );
};

export default AboutMe;
