import cls from "classnames";
import React from "react";
import Link from "next/link";
import ProfileShot from "../../sharedComponents/profileShot";
import SocialContacts from "../../sharedComponents/socialContacts";
import styles from "./home.module.css";

const AboutMe = () => {
  const aboutMetext = `Clean code, problem solving, awkward silences in large group zoom meetings...I love it all. My name is Kevin O'Malley and welcome to my web page. I am a full stack JavaScript developer with a focus in React and Node.js. Please check out my projects and blog posts or
  `;
  const aboutMeBlogPost = (
    <Link alt="About me" href="/posts/introduction">
      <a> learn more about me!</a>
    </Link>
  );

  return (
    <div className={cls("glass", styles.aboutMe)}>
      <div className={styles.profileShotWrapper}>
        <ProfileShot />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hello!</h1>
          {aboutMetext} {aboutMeBlogPost}
        </div>
        <SocialContacts isInverted={true} />
      </div>
    </div>
  );
};

export default AboutMe;
