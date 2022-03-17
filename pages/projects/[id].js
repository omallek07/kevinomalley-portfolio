import MarkdownPage from "../../components/sharedComponents/markdownPage";

import {
  getAllMarkdownIds,
  getMarkdownData,
} from "../../lib/handleMarkdownData";

export default function ProjectPage({ projectData }) {
  return <MarkdownPage markdownData={projectData} />;
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = getAllMarkdownIds("projects");
  return {
    paths,
    fallback: false,
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const projectData = await getMarkdownData("projects", params.id);
  return {
    props: {
      projectData,
    },
  };
}
