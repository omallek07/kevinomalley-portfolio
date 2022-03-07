import React from "react";
import ProfileShot from "../../sharedComponents/profileShot";
import styles from "./home.module.css";

const AboutMe = () => {
  const span1 = "Hello everyone! Thank you for visiting my site.";
  const span2 =
    "A little about me: I am a Fullstack Academy graduate and a professional Javascript developer. I love exploring the world of code and sharpening my skillset with personal projects and online courses.";
  const span3 =
    "I currently reside in Chicago with my wife and our two dogs, Ollie and Chloe. Please check out my portfolio and feel free to email me to reach out!";
  const spanArray = [span1, span2, span3];

  const renderedText = spanArray.map((spanText) => <span>{spanText}</span>);

  return (
    <div className="glass">
      <div className={styles.profileShotWrapper}>
        <ProfileShot />
      </div>
      <div className={styles.textContainer}>{renderedText}</div>
    </div>
  );
};

export default AboutMe;
