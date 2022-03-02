import React from "react";
import styles from "./home.module.css";

import Banner from "../../sharedComponents/banner";
import Button from "../../sharedComponents/button";
import AboutMe from "./aboutMe";

const Home = () => {
  return (
    <div className="homePage">
      <Banner title="Welcome to my page!" />
      <section>
        <AboutMe />
      </section>
      <Button buttonText="Check out my resume" link="/projects" />
    </div>
  );
};

export default Home;
