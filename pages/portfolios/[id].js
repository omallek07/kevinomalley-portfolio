import React from "react";
import BaseLayout from '@/components/Shared/BaseLayout';

import { useRouter } from 'next/router';

import { useGetPortfolioById } from '@/actions';

const Portfolio = () => {
  const router = useRouter();
  const {data: post, error, loading} = useGetPortfolioById(router.query.id);

  let renderPortfolio;

  if (loading) {
    renderPortfolio = <div>Loading...</div>
  } else if (error) {
    renderPortfolio = <div>{error.message}</div>
  } else {
    renderPortfolio = (
        <div>
          <div>{post.title}</div>
          <div>{post.description}</div>
        </div>
    )
  }

  return (
    <BaseLayout>
      {renderPortfolio}
    </BaseLayout>
  )
}
export default Portfolio;
