import Home from '../components/pages/home';
import { getSortedMarkdownData } from '../lib/handleMarkdownData';

export async function getStaticProps() {
  const allPostsData = getSortedMarkdownData('posts');
  const allProjectsData = getSortedMarkdownData('projects');

  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}

export default function HomePage(props) {
  return <Home {...props} />;
}
