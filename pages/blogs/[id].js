import React from "react";
import axios from 'axios';
import BaseLayout from '@/components/Shared/BaseLayout';

import { withRouter } from 'next/router';

import { useGetData } from '@/actions';

const Blog = ({query}) => {
  const {data: post, error, loading} = useGetData(`https://jsonplaceholder.typicode.com/posts/${query.id}`);

  let renderBlog;

  if (loading) {
    renderBlog = <div>Loading...</div>
  } else if (error) {
    renderBlog = <div>{error.message}</div>
  } else {
    renderBlog = (
        <div>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
    )
  }

  return (
    <BaseLayout>
      {renderBlog}
    </BaseLayout>
  )
}
export default withRouter(Blog);
