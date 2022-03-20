import React from "react";
import styles from "./home.module.css";
import MarkdownPage from "../../sharedComponents/markdownPage";

import Banner from "../../sharedComponents/banner";
import Button from "../../sharedComponents/button";
import AboutMe from "./aboutMe";

const Home = (props) => {
  const { latestPost, latestProject } = props;
  return (
    <div className="homePage">
      <Banner title="Welcome to my page!" />
      <section>
        <AboutMe />
      </section>
      <h1 className="subHeader">Latest Post</h1>
      <section>
        <MarkdownPage markdownData={latestPost} />
      </section>
      <h1 className="subHeader">Latest Project</h1>
      <section>
        <MarkdownPage markdownData={latestProject} />
      </section>
      <Button buttonText="Check out my resume" link="/portfolio" />
    </div>
  );
};

export default Home;
