import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadInitialDataByCategory, loadInitialData } from '../../actions/PostActions';
import { loadCategories } from '../../actions/CategoryActions';
import { Link } from 'react-router-dom';
import './CategoryList.css';

class CategoryList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadCategories());
  }

  onClick = (category) => {
    const { dispatch } = this.props;

    if (category === 'all') {
      dispatch(loadInitialData());
      return;
    }

    dispatch(loadInitialDataByCategory(category));
  }

  render() {
    const { categories } = this.props;

    return (
      <aside className="category-list">
        <h2 className="section-title">Categories</h2>
        <ul>
          <li key='all'>
            <Link to={`/`} onClick={() => this.onClick('all')}>
              All</Link>
            </li>
          {
            categories.map(category => 
              <li key={category.name}>
                <Link to={`/${category.path}`} onClick={() => this.onClick(category.name)}>
                {category.name}</Link>
              </li>
            )
          }
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = ({ categoryReducer }) => {
  return categoryReducer;
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CategoryList);
