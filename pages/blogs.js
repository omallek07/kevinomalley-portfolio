import axios from 'axios';
import React, { Component } from 'react';
import BaseLayout from '../components/Shared/BaseLayout';
import Link from 'next/link';

export default class Blogs extends Component {

  static async getInitialProps() {
    let posts = [];
    try {
      const apiLink = `https://jsonplaceholder.typicode.com/posts`;
      const { data } = await axios.get(apiLink);
      posts = data;
    } catch(e) {
      console.log(e);
    }

    return { posts: posts.slice(0, 10) };
  }

  renderPosts(posts) {
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

  render() {
    const { posts } = this.props;

    return (
      <BaseLayout>
        <h1>I am the blogs page</h1>
        <ul>
        { this.renderPosts(posts) }
        </ul>
      </BaseLayout>
    )
  }

}
