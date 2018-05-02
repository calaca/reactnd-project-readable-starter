import React, { Component } from 'react';
import { getPosts } from '../util/PostsAPI';
import sortBy from 'sort-by';

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    getPosts()
      .then(posts => {
        posts.sort(sortBy('title'));
        this.setState({ posts });
      }
    )
  }

  render() {
    return (
      <section className="home">
        Home
      </section>
    )
  }
}

export default Home;
