import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post';
import CategoryList from '../CategoryList/CategoryList';
import { changeOrderByTarget } from '../../actions/PostActions';
import sortBy from 'sort-by';
import './Home.css';

class Home extends Component {
  sortPosts = (posts) => {
    const { orderByTarget } = this.props;

    return posts.sort(sortBy(`-${orderByTarget}`))
  }

  render() {
    let { posts } = this.props;
    const { dispatch, orderByTarget } = this.props;
    posts = this.sortPosts(posts);

    return (
      <Fragment>
        <main className="home">
          <section className="posts">
            <h2 className="section-title">Posts</h2>
            <div className="actions">
              <div className="order-by">
                <span>Order by</span>
                <select value={orderByTarget} onChange={(e) => { dispatch(changeOrderByTarget(e.target.value)) }}>
                  <option value="voteScore">votes</option>
                  <option value="timestamp">date</option>
                </select>
              </div>
              <button className="btn-primary green">New Post</button>
            </div>
            <div className="posts-wrapper">
              {
                posts.length !== 0 ? posts.map(post => <Post key={post.id} post={post} />)
                : <p className="no-posts">No posts found for this category.</p>
              }
            </div>
          </section>
        </main>
        <CategoryList />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ postReducer }) => {
  return postReducer;
}

export default connect(mapStateToProps)(Home);
