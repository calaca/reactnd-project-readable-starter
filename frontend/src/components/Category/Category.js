import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostList from '../PostList/PostList';
import CategoryList from '../CategoryList/CategoryList';
import { sortPosts } from '../../helpers/sortPosts';
// import { loadInitialData } from '../../actions/PostActions';
import { changeOrderByTarget } from '../../actions/AppActions';
import Loading from '../Loading/Loading';

class Category extends Component {
  /**
  * @description Loads initial data
  */
  componentDidMount() {
    const { dispatch } = this.props;
    // TODO: load only posts from a specific category here
    // dispatch(loadInitialData());
  }

  render() {
    const { dispatch, orderByTarget, loading } = this.props;
    let { posts } = this.props;

    let content =
      loading ? <Loading loading={loading} />
        : (
          <Fragment>
            <main className="main-content category">
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
                  <Link to="/post/new" className="btn-primary green">New Post</Link>
                </div>
                <PostList posts={posts} />
              </section>
            </main>
            <CategoryList />
          </Fragment>
        );

    return (
      <Fragment>
        {content}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ postReducer, appReducer }) => {
  let posts = postReducer.posts;
  const orderByTarget = appReducer.orderByTarget;
  posts = posts.filter(post => !post.deleted);
  posts = sortPosts(posts, orderByTarget);

  return {
    ...postReducer,
    posts,
    ...appReducer
  };
};

Category.propTypes = {
  posts: PropTypes.array.isRequired,
  orderByTarget: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Category);
