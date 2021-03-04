import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// TODO: Create Hamburger Menu for responsiveness

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 8vh;
  margin-left: 2rem;
  position: absolute;
  top: 0;
  z-index: 5;
`;

const StyledLink = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-right: 2rem;
  letter-spacing: 1.1px;

  &:first-of-type {
    font-size: 2rem;
    font-weight: bold;
    margin-right: 2.5rem;
  }
`;

const pageLinks = [
  {
    name: `Kevin O'Malley`,
    path: '/'
  },
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Blogs',
    path: '/blogs'
  },
  {
    name: 'Resume',
    path: '/resume'
  }
];

const renderPageLinks = pageLinks.map(page => {
  return (
    <Link key={page.name} href={page.path} passHref>
      <StyledLink> {page.name} </StyledLink>
    </Link>
  )
})

const Header = () => {
  return (
    <StyledHeader>
      {renderPageLinks}
      {/* Login Link */}
      <Link key={'login'} href={'/login'} passHref>
        <StyledLink>Login</StyledLink>
      </Link>
    </StyledHeader>
  );
};

export default Header;
