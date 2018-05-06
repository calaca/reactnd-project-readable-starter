import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateFormatter from '../../helpers/dateFormatter';
import { submitCommentVoteScore } from '../../actions/CommentActions';
import './Comment.css';

class Comment extends Component {

  render() {
    const { comment, dispatch } = this.props;

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
            <button className="edit">edit</button>
            <button className="delete">delete</button>
          </div>
        </div>
      </article>
    )
  }
}

export default connect()(Comment);
