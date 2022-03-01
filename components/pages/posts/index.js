import React from "react";
import GoBack from "../../sharedComponents/goBack/index.js";
import Card from "../../sharedComponents/card/index.js";

const Posts = ({ allPostsData }) => {
  const renderedPosts = allPostsData.map(({ id, ...props }) => (
    <Card key={id} href={`/posts/${id}`} {...props} />
  ));

  return (
    <section>
      <GoBack />
      <h2>Blog</h2>
      <div className="cardLayout">{renderedPosts}</div>
    </section>
  );
};

export default Posts;
