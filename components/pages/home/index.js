import React from "react";
import styles from "./home.module.css";

import Banner from "../../sharedComponents/banner";
import Button from "../../sharedComponents/button";
import AboutMe from "./aboutMe";

const Home = () => {
  return (
    <>
      <section className={styles.bannerRow}>
        <Banner title="Welcome to my page!" subtitle="Kevin O'Malley" />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Button buttonText="Check out my resume" link="/projects" />
      </section>
    </>
  );
};

export default Home;
