import React from "react";
import BaseLayout from '@/components/Shared/BaseLayout';

import { useRouter } from 'next/router';

import { useGetPostById } from '@/actions';

const Blog = () => {
  const router = useRouter();
  const {data: post, error, loading} = useGetPostById(router.query.id);

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
export default Blog;
