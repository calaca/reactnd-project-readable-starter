import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {

  render() {
    return (
      <article className="comment">
        <div className="vote">
          <span className="up"></span>
          <span className="count">5</span>
          <span className="down"></span>
        </div>
        <div className="content">
          <div className="author-details">
            <h3 className="author-name">Person</h3>
            <span className="date">20/02/18 13:06</span>
          </div>
          <p className="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="info-actions">
            <button className="edit">edit</button>
            <button className="delete">delete</button>
          </div>
        </div>
      </article>
    )
  }
}

export default Comment;
