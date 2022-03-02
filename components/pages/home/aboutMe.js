import React from "react";
import ProfileShot from "../../sharedComponents/profileShot";
import styles from "./home.module.css";

const AboutMe = () => {
  const aboutMeText =
    "Hello everyone! Thank you for visiting my site. A little about me: I am a Fullstack Academy graduate and a professional Javascript developer. I love exploring the world of code and sharpening my skillset with personal projects and online courses. I currently reside in Chicago with my wife and our two dogs, Ollie and Chloe. Please check out my portfolio and feel free to email me to reach out!";
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
