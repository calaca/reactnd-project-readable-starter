import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = ({ categories }) => (
  <aside className="category-list">
    <h2 className="section-title">Categories</h2>
    <ul>
      <li key='all'>
        <Link to={`/`}>All</Link>
      </li>
      {
        categories.map(category => 
          <li key={category.name}>
            <Link to={`/${category.path}`}>{category.name}</Link>
          </li>
        )
      }
    </ul>
  </aside>
);

const mapStateToProps = ({ categoryReducer }) => {
  return categoryReducer;
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CategoryList);
