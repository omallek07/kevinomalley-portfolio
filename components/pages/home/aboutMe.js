import cls from "classnames";
import React from "react";
import Link from "next/link";
import ProfileShot from "../../sharedComponents/profileShot";
import SocialContacts from "../../sharedComponents/socialContacts";
import styles from "./home.module.css";

const AboutMe = () => {
  const aboutMetext = `Clean code, problem solving, having my dog jump on my keyboard while I'm typansaadsasjfja...I love it all. My name is Kevin O'Malley and welcome to my web page. I am a full stack software engineer with a focus in JavaScript. Please check out my projects and blog posts or
  `;
  const aboutMeBlogPost = (
    <Link alt="About me" href="/posts/introduction">
      <a> learn more about me!</a>
    </Link>
  );

  return (
    <div className={styles.aboutMe}>
      <div className={styles.profileShotWrapper}>
        <ProfileShot />
      </div>
      <div className={cls("glass", styles.rightContainer)}>
        <div className={styles.textContainer}>
          <div className={styles.aboutMeTitleContainer}>
            <h1>Welcome!</h1>
          </div>
          <p>
            {aboutMetext} {aboutMeBlogPost}
          </p>
        </div>
        <SocialContacts isLabel />
      </div>
    </div>
  );
};

export default AboutMe;
