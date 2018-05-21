import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostList from '../PostList/PostList';
import CategoryList from '../CategoryList/CategoryList';
import { sortPosts } from '../../helpers/sortPosts';
import { loadInitialDataByCategory } from '../../actions/PostActions';
import { changeOrderByTarget } from '../../actions/AppActions';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';

class Category extends Component {
  /**
  * @description Loads initial data by category
  */
  componentDidMount() {
    const { dispatch } = this.props;
    const { category } = this.props.match.params;
    dispatch(loadInitialDataByCategory(category));
  }

  render() {
    const { dispatch, orderByTarget, loading, categories } = this.props;
    const { category } = this.props.match.params;
    let { posts } = this.props;
    let exists = false;

    // Checks if the category in the URL exists in the category list
    categories.forEach(c => {
      if (c.name === category) {
        exists = true;
      }
    });

    // Returns the NotFound component if the category doesn't match
    if (!exists) return <NotFound />;

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

const mapStateToProps = ({ postReducer, appReducer, categoryReducer }) => {
  let posts = postReducer.posts;
  const orderByTarget = appReducer.orderByTarget;
  posts = posts.filter(post => !post.deleted);
  posts = sortPosts(posts, orderByTarget);

  return {
    ...postReducer,
    posts,
    ...appReducer,
    ...categoryReducer
  };
};

Category.propTypes = {
  posts: PropTypes.array.isRequired,
  orderByTarget: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Category);
