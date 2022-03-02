import React from "react";
import Card from "../../sharedComponents/card/index.js";
import Banner from "../../sharedComponents/banner/index.js";

const Posts = ({ allPostsData }) => {
  const renderedPosts = allPostsData.map(({ id, ...props }) => (
    <Card key={id} href={`/posts/${id}`} {...props} />
  ));

  return (
    <>
      <Banner title={"Blog Posts"} />
      <section className="cardLayout"> {renderedPosts}</section>
    </>
  );
};

export default Posts;
