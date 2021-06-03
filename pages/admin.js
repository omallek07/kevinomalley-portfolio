import React from 'react';
import withAuth from '@/hoc/withAuth';
import BaseLayout from '@/components/shared/BaseLayout';

const Admin = ({user, loading}) => {

  return (
    <BaseLayout>
      <h1>Welcome</h1>
    </BaseLayout>
  )
};

export default withAuth(Admin);
