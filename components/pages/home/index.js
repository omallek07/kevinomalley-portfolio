import React from "react";
import styles from "./home.module.css";
import ProfileShot from "../../sharedComponents/profileShot";
import Hero from "../../sharedComponents/hero";

import Banner from "../../sharedComponents/banner";
import Button from "../../sharedComponents/button";

const Home = () => {
  const buttonClickHandler = () => {
    console.log("sad");
  };

  return (
    <>
      <section className={styles.bannerRow}>
        <Banner title="Welcome to my page!" subtitle="Kevin O'Malley" />
        <div className={styles.profileShotWrapper}>
          <ProfileShot />
        </div>
      </section>
      <section>
        <Button
          buttonText="Check out my resume"
          handleOnClick={buttonClickHandler}
        />
      </section>
    </>
  );
};

export default Home;
