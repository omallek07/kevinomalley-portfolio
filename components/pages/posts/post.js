import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";

import utilStyles from "../../../styles/utils.module.css";
import GoBack from "../../sharedComponents/goBack/index.js";

const Post = ({ postData }) => {
  const { title, date, contentHtml } = postData;

  return (
    <article className={utilStyles.container}>
      <GoBack />
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
};

export default Post;
