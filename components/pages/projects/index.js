import React from "react";
import Link from "next/link";
import Date from "../../sharedComponents/dateDisplay/index.js";

const Projects = ({ allProjectsData }) => {
  const renderedProjects = allProjectsData.map(({ id, date, title }) => (
    <li key={id}>
      <Link href={`/projects/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small>
        <Date dateString={date} />
      </small>
    </li>
  ));

  return (
    <section>
      <h2>Projects</h2>
      <ul>{renderedProjects}</ul>
    </section>
  );
};

export default Projects;
