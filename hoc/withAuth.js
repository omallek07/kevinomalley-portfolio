import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Redirect from '@/components/shared/Redirect';

const withAuth = (Component) => {
  return props => {
    const { user, error, isLoading } = useUser();
    console.log('user', user)
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (!user) {
      return <Redirect ssr to={'/api/auth/login'} />
    }

    return <Component user={user} loading={isLoading} {...props} />
  }
}

export default withAuth;
