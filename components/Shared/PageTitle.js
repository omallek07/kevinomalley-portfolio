import React from 'react';
import styled from 'styled-components';

const StyledPageTitle = styled.h1`
  color: ${props => props.theme.primaryOrange};
  text-align: center;
  margin-top: 2rem;
`;

const PageTitle = ({pageTitle}) => <StyledPageTitle>{pageTitle}</StyledPageTitle>

export default PageTitle;
