import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  position: relative;
`;

const StyledMain = styled.main`
  position: relative;
  overflow: hidden;
  height: 95vh;
  background-image: linear-gradient(45deg,#00aeef 0%,#096fb9 100%);
`;

const BaseLayout = props => {
  const { className, children } = props;
  return (
    <StyledLayout>
      <Header />
      <StyledMain className={`${className}`}>
        {children}
      </StyledMain>
    </StyledLayout>
  );
};

export default BaseLayout;
