import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";

import GoBack from "../../sharedComponents/goBack/index.js";

const Project = ({ projectData }) => {
  const { title, date, contentHtml } = projectData;

  return (
    <article>
      <GoBack />
      <h1>{title}</h1>
      <div>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export default Project;
