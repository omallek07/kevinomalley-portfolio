import React from "react";
import Link from "next/link";
import Date from "../../sharedComponents/dateDisplay/index.js";
import GoBack from "../../sharedComponents/goBack/index.js";

const Posts = ({ allPostsData }) => {
  const renderedPosts = allPostsData.map(({ id, date, title }) => (
    <li key={id}>
      <Link href={`/posts/${id}`}>
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
      <GoBack />
      <h2>Blog</h2>
      <ul>{renderedPosts}</ul>
    </section>
  );
};

export default Posts;
