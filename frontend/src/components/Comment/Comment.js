import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormatter from '../../helpers/dateFormatter';
import { submitCommentVoteScore, removeComment } from '../../actions/CommentActions';
import './Comment.css';

class Comment extends Component {
  onDeleteHandler = () => {
    const { comment, dispatch, post } = this.props;
    dispatch(removeComment(comment.id, post));
  }

  render() {
    const { comment, dispatch, loadCommentData } = this.props;

    return (
      <article className="comment">
        <div className="vote">
          <span
            className="up"
            onClick={() => { dispatch(submitCommentVoteScore(comment.id, 'upVote')) }}
          >
          </span>
          <span className="count">{comment.voteScore}</span>
          <span
            className="down"
            onClick={() => { dispatch(submitCommentVoteScore(comment.id, 'downVote')) }}
          >
          </span>
        </div>
        <div className="content">
          <div className="author-details">
            <h3 className="author-name">{comment.author}</h3>
            <span className="date">{`${dateFormatter(comment.timestamp)} ago`}</span>
          </div>
          <p className="body">
            {comment.body}
          </p>
          <div className="info-actions">
            <button
              className="edit"
              onClick={() => loadCommentData(comment.body, comment.author, comment.id)}
            >
              edit
            </button>
            <button
              className="delete"
              onClick={this.onDeleteHandler}
            >
              delete
            </button>
          </div>
        </div>
      </article>
    )
  }
}

export default connect()(Comment);
