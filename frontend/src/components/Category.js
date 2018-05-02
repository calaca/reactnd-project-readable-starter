import React, { Component } from 'react';

class Category extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="category">
        {this.props.match.params.category}
      </section>
    )
  }
}

export default Category;
