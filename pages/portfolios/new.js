import React from 'react';
import BaseLayout from '@/components/shared/BaseLayout';
import withAuth from '@/hoc/withAuth';
import PortfolioFrom from '@/components/portfolios/PortfolioForm';

const PortfolioNew = ({user, loading: userLoading}) => {
  return (
    <BaseLayout pageTitle="Create New Portfolio" pageTheme="portfolio">
      <PortfolioFrom />
    </BaseLayout>
  )
};

export default withAuth(PortfolioNew);
