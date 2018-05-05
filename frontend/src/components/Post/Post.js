import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPostVoteScore } from '../../actions/PostActions';
import dateFormatter from '../../helper/dateFormatter';
import './Post.css';

const Post = ({ post, dispatch }) => (
  <article className="post">
    <div className="vote">
      <span className="up" onClick={() => { dispatch(submitPostVoteScore(post.id, 'upVote')) }}></span>
      <span className="count">{post.voteScore}</span>
      <span className="down" onClick={() => { dispatch(submitPostVoteScore(post.id, 'downVote')) }}></span>
    </div>
    <div className="thumbnail"></div>
    <div className="content">
      <h3 className="title">
        <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
        <span className="date">{`${dateFormatter(post.timestamp)} ago`}</span>
      </h3>
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
);

export default connect()(Post);
