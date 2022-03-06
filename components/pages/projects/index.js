import React from "react";
import Card from "../../sharedComponents/card/index.js";
import Banner from "../../sharedComponents/banner/index.js";

const Projects = ({ allProjectsData }) => {
  const renderedProjects = allProjectsData.map(({ id, ...props }) => (
    <Card key={id} href={`/projects/${id}`} {...props} />
  ));

  return (
    <>
      <Banner title="My Projects" />
      <section className="cardLayout"> {renderedProjects}</section>
    </>
  );
};

export default Projects;
