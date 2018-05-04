import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <article className="post">
        <div className="vote">
          <span className="up"></span>
          <span className="count">{post.voteScore}</span>
          <span className="down"></span>
        </div>
        <div className="thumbnail"></div>
        <div className="content">
          <h3 className="title"><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h3>
          <p className="details">submitted by <span>{post.author}</span></p>
          <div className="comments">
            <p>
              <span className="count">{post.commentCount}</span> comments
            </p>
          </div>
          <div className="info-actions">
            <span className="category">{post.category}</span>
            <button className="edit">edit</button>
            <button className="delete">delete</button>
          </div>
        </div>
      </article>
    )
  }
}

export default Post;
