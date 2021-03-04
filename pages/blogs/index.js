import React from 'react';
import BaseLayout from '@/components/Shared/BaseLayout';
import Link from 'next/link';
import { useGetData } from '@/actions';

const Blogs = () => {

  const { data: posts, error, loading} = useGetData('/api/v1/posts');

  const renderPosts = (posts) => {
    return posts.map(post => {
      return (
        <li key={post.id}>
          <Link as={`/blogs/${post.id}`} href={`/blogs/[id]`}>
            <a>
              {post.title}
            </a>
          </Link>
        </li>
      )
    });
  }

  return (
    <BaseLayout>
      <h1>I am the blogs page</h1>
      {
        loading && <div>Loading...</div>
      }
      {
        error && <div>{error.message}</div>
      }
      {
        posts && (
          <ul>
            { renderPosts(posts) }
          </ul>
        )
      }
    </BaseLayout>
  )
}

export default Blogs;
