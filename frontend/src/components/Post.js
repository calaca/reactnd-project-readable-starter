import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {
    return (
      <article className="post">
        <div className="vote">
          <span className="up"></span>
          <span className="count">5</span>
          <span className="down"></span>
        </div>
        <div className="thumbnail"></div>
        <div className="content">
          <h3 className="title"><a href="">This is the post title</a></h3>
          <p className="details">submitted by <span>person</span></p>
          <div className="comments">
            <p>
              <span className="count">3</span> comments
            </p>
          </div>
          <div className="info-actions">
            <span className="category">category</span>
            <button className="edit">edit</button>
            <button className="delete">delete</button>
          </div>
        </div>
      </article>
    )
  }
}

export default Post;
