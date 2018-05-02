import React, { Component } from 'react';
import { getPosts, getCategories } from '../util/PostsAPI';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';

class Home extends Component {
  state = {
    posts: [],
    categories: []
  }

  componentDidMount() {
    getPosts()
      .then(posts => {
        posts.sort(sortBy('title'));
        this.setState({ posts });
      }
    )

    getCategories()
      .then(categories => {
        categories.sort(sortBy('name'));
        this.setState({ categories });
      })
  }

  render() {
    return (
      <section className="home">
        Home
        <ul className="posts">
          {
            this.state.posts.map(post =>
              <Link key={post.id} to={`/${post.category}/${post.id}`}>{post.title}</Link>
            )
          }
        </ul>
        <ul className="category">
          {
            this.state.categories.map(category => 
              <Link key={category.name} to={`/${category.path}`}>{category.name}</Link>
            )
          }
        </ul>
      </section>
    )
  }
}

export default Home;
