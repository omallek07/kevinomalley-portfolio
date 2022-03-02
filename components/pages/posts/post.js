import React from "react";
import Date from "../../sharedComponents/dateDisplay/index.js";

const Post = ({ postData }) => {
  const { title, date, contentHtml } = postData;

  return (
    <section>
      <div>
        <Date dateString={date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </section>
  );
};

export default Post;
