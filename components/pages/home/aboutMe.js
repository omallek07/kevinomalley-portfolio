import cls from "classnames";
import React from "react";
import ProfileShot from "../../sharedComponents/profileShot";
import styles from "./home.module.css";

const AboutMe = () => {
  const span1 = "Thank you for visiting my little piece of the internet.";
  const span2 =
    "Come take a look at my blog, my projects, and my portfolio resume. Feel free to email me if you want to reach out. Thank you!";

  const spanArray = [span1, span2];

  const renderedText = spanArray.map((spanText) => <span>{spanText}</span>);

  return (
    <div className={cls("glass", styles.aboutMe)}>
      <div className={styles.profileShotWrapper}>
        <ProfileShot />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hello!</h1>
        {renderedText}
      </div>
    </div>
  );
};

export default AboutMe;
