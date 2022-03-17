import Home from "../components/pages/home";
import { getSortedMarkdownData } from "../lib/handleMarkdownData";

export async function getStaticProps() {
  const latestPostsData = getSortedMarkdownData("posts")[0];
  const latestProjectData = getSortedMarkdownData("projects")[0];

  return {
    props: {
      latestPost: latestPostsData,
      latestProject: latestProjectData,
    },
  };
}

export default function HomePage(props) {
  return <Home {...props} />;
}
