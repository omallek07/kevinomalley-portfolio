import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";

const Project = ({ projectData }) => {
  const { title, date, contentHtml } = projectData;

  return (
    <section>
      <div>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
};

export default Project;
