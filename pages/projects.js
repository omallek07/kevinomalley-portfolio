import Projects from "../components/pages/projects";

import { getSortedMarkdownData } from "../lib/handleMarkdownData";

export async function getStaticProps() {
  const allProjectsData = getSortedMarkdownData("projects");
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function ProjectsPage({ allProjectsData }) {
  return <Projects allProjectsData={allProjectsData} />;
}
