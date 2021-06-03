import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import moment from 'moment';

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
  console.log(portfolio);
  const router = useRouter();
  return (
    <StyledWrapper onClick={() => {
      router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
    }} key={portfolio._id}>
          <StyledHeader>
          {portfolio.title}
          </StyledHeader>
          <StyledBody>
            <p><b>Description: </b>{portfolio.description}</p>
            <p><b>Company: </b>{portfolio.company}</p>
            <p><b>Position: </b>{portfolio.jobTitle}</p>
            <p><b>Location: </b>{portfolio.location}</p>
            <p><b>Start Date: </b>{moment(portfolio.startDate).format('MMMM YYYY')}</p>
            <p><b>End Date: </b>{portfolio.endDate ? moment(portfolio.endDate).format('MMMM YYYY') : 'Still Working Here'}</p>
          </StyledBody>
    </StyledWrapper>
  );
};

export default PortfolioCard;
