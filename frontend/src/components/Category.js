import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <section className="category">
        {this.props.match.params.category}
      </section>
    )
  }
}

export default Category;
