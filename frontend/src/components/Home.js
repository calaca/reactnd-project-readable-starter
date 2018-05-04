import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import CategoryList from './CategoryList';
import './Home.css';

class Home extends Component {
  render() {
    let { posts } = this.props;
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
              {
                posts.map(post => <Post key={post.id} post={post} />)
              }
            </div>
          </section>
        </main>
        <CategoryList />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ initReducer }) => {
  return initReducer;
}

export default connect(mapStateToProps)(Home);
