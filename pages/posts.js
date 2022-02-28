import Posts from "../components/pages/posts";
import Layout from "../components/layout";

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
  return (
    <Layout pageTitle="Blog Posts">
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}
