import Project from "../../components/pages/projects/project";
import Layout from "../../components/layout";

import {
  getAllMarkdownIds,
  getMarkdownData,
} from "../../lib/handleMarkdownData";

export default function ProjectPage({ projectData }) {
  return <Project projectData={projectData} />;
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
