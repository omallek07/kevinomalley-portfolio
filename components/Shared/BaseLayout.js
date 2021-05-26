import React from 'react';
import Header from './Header';
import PageTitle from './PageTitle';
import styled, {css} from 'styled-components';
import Profile from '../Profile';

const StyledLayout = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  position: relative;
`;

const StyledMain = styled.main`
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 8vh 1rem 1rem 1rem;
  background-image: linear-gradient(45deg,${props => props.theme.primaryBlue} 0%,${props => props.theme.secondaryBlue} 100%);
  ${props => props.pageTheme === 'portfolio' && css`
  background-image: linear-gradient(45deg,${props => props.theme.primaryGray} 0%,${props => props.theme.secondaryGray} 100%);
  `}
`;

const BaseLayout = props => {
  const { pageTitle, pageTheme = 'default', className, children } = props;

  return (
    <StyledLayout>
      <Header pageTheme={pageTheme} />
      <StyledMain pageTheme={pageTheme} className={`${className}`}>
        {pageTitle && <PageTitle pageTitle={pageTitle} />}
        {children}
        <Profile />
      </StyledMain>
    </StyledLayout>
  );
};

export default BaseLayout;
