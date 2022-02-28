import React from "react";
import styles from "./home.module.css";
import ProfileShot from "../../sharedComponents/profileShot";
import LandingImage from "../../layout/landingImage/landingImage";

import Banner from "../../sharedComponents/banner";
import Button from "../../sharedComponents/button";

const Home = () => {
  const buttonClickHandler = () => {
    console.log("sad");
  };

  return (
    <>
      <div className={styles.landing}>
        <section>
          <Banner title="Welcome to my page!" subtitle="Kevin O'Malley" />
          <Button
            buttonText="Check out my resume"
            handleOnClick={buttonClickHandler}
          />
        </section>
        <section>
          <ProfileShot height={342} width={250} rounded bordered />
        </section>
      </div>
    </>
  );
};

export default Home;
