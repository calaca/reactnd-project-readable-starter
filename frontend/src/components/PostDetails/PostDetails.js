import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import Comment from '../Comment/Comment';
import dateFormatter from '../../helpers/dateFormatter';
import { loadPostData, submitPostVoteScore } from '../../actions/PostActions';
import { loadComments } from '../../actions/CommentActions';
import './PostDetails.css';

class PostDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.post;
    const { dispatch } = this.props;
    dispatch(loadPostData(id));
    dispatch(loadComments(id));
  }

  render() {
    const { dispatch } = this.props;
    const { post } = this.props.postReducer;
    const { comments } = this.props.commentReducer;
    comments.sort(sortBy('-voteScore'));

    return (
      <main className="post-details">
        <section className="posts-wrapper">
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
            <div className="content">
              <h3 className="title">
                <a href="">{post.title}</a>
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
                <button className="delete">delete</button>
              </div>
            </div>
            <div className="body">
              <p>
                {post.body}
              </p>
            </div>
          </article>
        </section>
        <section className="comments-wrapper">
          <form>
            <h4 className="form-title">Add or edit a comment</h4>
            <input type="text" name="name" placeholder="Your name" />
            <textarea name="comment" id="comment" placeholder="Type your message here." />
            <input className="btn-primary" type="submit" value="save" />
          </form>
          <div className="comments-list">
            <h3 className="section-subtitle">Comments <span>({post.commentCount})</span></h3>
            {
              comments.length !== 0 ? comments.map(comment => <Comment key={comment.id} comment={comment} />) : <p className="no-comments">There are no comments yet.</p>
            }
          </div>
        </section>
      </main>
    )
  }
}

const mapStateToProps = ({ postReducer, commentReducer }) => {
  return {
    postReducer,
    commentReducer
  };
}

export default connect(mapStateToProps)(PostDetails);
