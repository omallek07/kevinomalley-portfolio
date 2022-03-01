import Post from "../../components/pages/posts/post";

import {
  getAllMarkdownIds,
  getMarkdownData,
} from "../../lib/handleMarkdownData";

export default function PostPage({ postData }) {
  return <Post postData={postData} />;
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = getAllMarkdownIds("posts");
  return {
    paths,
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const postData = await getMarkdownData("posts", params.id);
  return {
    props: {
      postData,
    },
  };
}
