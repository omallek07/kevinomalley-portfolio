import React, { Component } from "react";
import axios from 'axios';
import BaseLayout from '../../components/Shared/BaseLayout';

import { withRouter } from 'next/router';

class Blog extends Component {
  static async getInitialProps({ query }) {
    let post = {};
    try {
      const apiLink = `https://jsonplaceholder.typicode.com/posts/${query.id}`;
      const { data } = await axios.get(apiLink);
      post = data;
    } catch(e) {
      console.log(e);
    }

    return { post };
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <span>Loading...</span>;
    }

    return (
      <BaseLayout>
        <div>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      </BaseLayout>
    )
  }
}

export default withRouter(Blog);
