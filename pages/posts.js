import Posts from "../components/pages/posts";

import { getSortedMarkdownData } from "../lib/handleMarkdownData";

export async function getStaticProps() {
  const allPostsData = getSortedMarkdownData("posts");
  return {
    props: {
      allPostsData,
    },
  };
}

export default function PostsPage({ allPostsData }) {
  return <Posts allPostsData={allPostsData} />;
}
