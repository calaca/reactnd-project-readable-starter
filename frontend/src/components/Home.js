import React, { Component, Fragment } from 'react';
import Post from './Post';
import CategoryList from './CategoryList';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <Fragment>
        <main className="home">
          <section className="posts">
            <h2 className="section-title">Posts</h2>
            <div className="actions">
              <div className="order-by">
                <span>Order by</span>
                <select>
                  <option value="1">votes</option>
                  <option value="2">date</option>
                </select>
              </div>
              <button className="btn-primary green">New Post</button>
            </div>
            <div className="posts-wrapper">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </section>
        </main>
        <CategoryList />
      </Fragment>
    )
  }
}

export default Home;
