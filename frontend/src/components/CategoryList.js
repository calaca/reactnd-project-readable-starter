import React, { Component } from 'react';
import './CategoryList.css';

class CategoryList extends Component {

  render() {
    return (
      <aside className="category-list">
        <h2 className="section-title">Categories</h2>
        <ul>
          <li><a href="">category</a></li>
          <li><a href="">category</a></li>
          <li><a href="">category</a></li>
        </ul>
      </aside>
    )
  }
}

export default CategoryList;
