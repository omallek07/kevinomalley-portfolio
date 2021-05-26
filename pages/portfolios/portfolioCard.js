import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const StyledWrapper = styled.div`
  background: white;
  padding: 10px;
  margin: 5rem;
`
const StyledHeader = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledBody = styled.div`
  padding: 2rem;
`;

const PortfolioCard = ({portfolio}) => {
  return (
    <StyledWrapper key={portfolio._id}>
      <Link as={`/portfolios/${portfolio._id}`} href={`/portfolios/[id]`}>
        <>
          <StyledHeader>{portfolio.jobTitle}</StyledHeader>

          <StyledBody>
            <div className="location">{portfolio.location}</div>
            <div className="title">{portfolio.title}</div>
            <div className="description">{portfolio.description}</div>
            <div>{portfolio.jobTitle}</div>
          </StyledBody>
        </>
      </Link>
    </StyledWrapper>
  );
};

export default PortfolioCard;
