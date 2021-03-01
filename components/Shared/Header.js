import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  background: white;
`;

const StyledLink = styled.a`
  color: red;
  margin-right: 2rem;
`;

const pageLinks = [
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
    </StyledHeader>
  );
};

export default Header;
