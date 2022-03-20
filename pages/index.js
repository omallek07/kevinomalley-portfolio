import Home from "../components/pages/home";
import {
  getSortedMarkdownData,
  getMarkdownData,
} from "../lib/handleMarkdownData";

export async function getStaticProps() {
  const latestPostsData = await getSortedMarkdownData("posts")[0];
  const latestProjectData = await getSortedMarkdownData("projects")[0];
  const latestPostsMarkdown = await getMarkdownData(
    "posts",
    latestPostsData.id
  );
  const latestProjectsMarkdown = await getMarkdownData(
    "projects",
    latestProjectData.id
  );

  return {
    props: {
      latestPost: latestPostsMarkdown,
      latestProject: latestProjectsMarkdown,
    },
  };
}

export default function HomePage(props) {
  return <Home {...props} />;
}
