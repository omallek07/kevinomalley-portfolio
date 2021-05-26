import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { useUser } from '@auth0/nextjs-auth0';

// TODO: Create Hamburger Menu for responsiveness

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  padding-left: 2rem;
  position: absolute;
  top: 0;
  z-index: 5;
  ${props => props.pageTheme === 'portfolio' && css`
  background: ${props => props.theme.primaryBlack};
  `}
`;

const StyledLink = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-right: 2rem;
  letter-spacing: 1.1px;

  &:first-of-type {
    font-size: 1.5rem;
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
    name: 'Portfolio',
    path: '/portfolios'
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
    name: 'About',
    path: '/about'
  },
];

const renderPageLinks = pageLinks.map(page => {
  return (
    <Link key={page.name} href={page.path} passHref>
      <StyledLink> {page.name} </StyledLink>
    </Link>
  )
})

const renderAuthLinks = userLoggedIn => {

  const href = userLoggedIn ? '/api/auth/logout' : '/api/auth/login';
  const linkLabel = userLoggedIn ? 'Logout' : 'Login';
  return (
    <Link key={linkLabel} href={href} passHref>
        <StyledLink>{linkLabel}</StyledLink>
    </Link>
  )
}

const Header = ({ pageTheme }) => {
  const { user } = useUser();
  return (
    <StyledHeader pageTheme={pageTheme}>
      {renderPageLinks}
      {renderAuthLinks(user)}
    </StyledHeader>
  );
};

export default Header;
