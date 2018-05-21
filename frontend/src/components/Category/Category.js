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


  /**
  * @description Loads initial data by category
  * @param {object} prevProps - The previous props
  */
  componentDidUpdate(prevProps) {
    const { category } = this.props.match.params;

    if (prevProps.match.params.category !== category) {
      const { dispatch } = this.props;
      dispatch(loadInitialDataByCategory(category));
    }
  }

  render() {
    const { dispatch, orderByTarget, loading, posts, categories, match } = this.props;

    if (!categories.includes(match.params.category)) {
      return <NotFound />;
    }

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
  return {
    loading: postReducer.loading,
    posts: sortPosts(postReducer.posts, appReducer.orderByTarget),
    orderByTarget: appReducer.orderByTarget,
    categories: categoryReducer.categories.map(c => c.path)
  };
};

Category.propTypes = {
  posts: PropTypes.array.isRequired,
  orderByTarget: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Category);
