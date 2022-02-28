import Projects from "../components/pages/projects";
import Layout from "../components/layout";

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
  return (
    <Layout pageTitle="Projects">
      <Projects allProjectsData={allProjectsData} />
    </Layout>
  );
}
