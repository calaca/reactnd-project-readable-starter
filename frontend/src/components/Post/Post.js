import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitPostVoteScore, removePost } from '../../actions/PostActions';
import dateFormatter from '../../helpers/dateFormatter';
import './Post.css';

class Post extends Component {
  deletePost = (id) => {
    const { dispatch } = this.props;
    dispatch(removePost(id));
  }

  render () {
    const { post, dispatch } = this.props;

    return (
      <article className="post">
        <div className="vote">
          <span
            className="up"
            onClick={() => { dispatch(submitPostVoteScore(post.id, 'upVote')) }}
          >
          </span>
          <span className="count">{post.voteScore}</span>
          <span
            className="down"
            onClick={() => { dispatch(submitPostVoteScore(post.id, 'downVote')) }}
          >
          </span>
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
            <Link to={`/${post.category}/${post.id}/edit`} className="edit">edit</Link>
            <button
              className="delete"
              onClick={() => this.deletePost(post.id)}
            >
              delete
        </button>
          </div>
        </div>
      </article>
    )
  }
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(Post);
