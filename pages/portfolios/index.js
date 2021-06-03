import React from 'react';
import BaseLayout from '@/components/shared/BaseLayout';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/portfolios/PortfolioCard';

const Portfolios = ({portfolios}) => {

  const renderPortfolios = (portfolios) => {
    return portfolios.map(portfolio => <PortfolioCard key={portfolio._id} portfolio={portfolio} />
    );
  }

  return (
    <BaseLayout
    pageTitle="Portfolio Page"
    pageTheme="portfolio">
    {
        portfolios && renderPortfolios(portfolios)
    }
    </BaseLayout>
  )
}

// This function is called during build time
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios }
  }
}

export default Portfolios;
