import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import styled from 'styled-components';

const StyledProfile = styled.div`
  position: fixed;
  bottom: 5px;
  right: 10px;
`;

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <StyledProfile>
        <span>You are logged in as <b>{user.name}</b></span>
      </StyledProfile>
    )
  );
}
