import React from "react";
import BaseLayout from '@/components/shared/BaseLayout';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/portfolios/PortfolioCard';

const Portfolio = ({portfolio}) => {

  if (!portfolio) {
    return <div>Oops! Something went wrong.</div>
  }
  return (
    <BaseLayout pageTitle="Portfolio Page"
    pageTheme="portfolio">
      <PortfolioCard portfolio={portfolio} />
    </BaseLayout>
  )
}
export default Portfolio;

export async function getServerSideProps({query}) {
  const json = await new PortfolioApi().getById(query.id);
  const portfolio = json.data;
  return {
    props: { portfolio }
  }
}


/*
// getStaticPaths example
// This function is executed at build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  // Get the paths we want to pre-render based on portfolio ID
  const paths = portfolios.map(portfolio => {
    return {
      params: {
        id: portfolio._id
      }
    }
  })

  // Fallback: false means that "not found" pages will resolved into 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: {portfolio}}
}
*/
