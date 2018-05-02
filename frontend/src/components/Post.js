import React, { Component } from 'react';

class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="post">
        {this.props.match.params.post}
      </section>
    )
  }
}

export default Post;
