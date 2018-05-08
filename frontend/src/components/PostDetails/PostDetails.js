import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import Comment from '../Comment/Comment';
import dateFormatter from '../../helpers/dateFormatter';
import { loadPostData, submitPostVoteScore, removePost, loadInitialData } from '../../actions/PostActions';
import { loadComments, addNewComment } from '../../actions/CommentActions';
import './PostDetails.css';

class PostDetails extends Component {
  state = {
    form: {
      body: '',
      author: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.post;
    const { dispatch } = this.props;
    dispatch(loadPostData(id));
    dispatch(loadComments(id));
  }

  deletePost = (id) => {
    const { dispatch } = this.props;
    dispatch(removePost(id));

    this.props.history.push('/');
  }

  onChangeHandler = (e) => {
    let input = e.target.name;
    let value = e.target.value;

    this.setState({
      form: {
        ...this.state.form,
        [input]: value
      }
    });
  }

  resetForm = () => {
    this.setState({
      form: {
        body: '',
        author: ''
      }
    });
  }

  addComment = (e) => {
    e.preventDefault();
    this.resetForm();

    const { dispatch } = this.props;
    const { form } = this.state;
    const id = this.props.match.params.post;

    dispatch(addNewComment({
      id: Date.now().toString(),
      timestamp: Date.now(),
      author: form.author,
      body: form.body,
      parentId: id
    }));
    dispatch(loadPostData(id));
    dispatch(loadInitialData());
  }

  render() {
    const { form } = this.state;
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
                <button
                  className="delete"
                  onClick={() => this.deletePost(post.id)}
                >
                  delete
                </button>
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
          <form id="comment-form" onSubmit={(e) => this.addComment(e)}>
            <h4 className="form-title">Add or edit a comment</h4>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Your name"
            />
            <textarea
              name="body"
              id="body"
              value={form.body}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Type your message here."
            />
            <input className="btn-primary" type="submit" value="save" />
          </form>
          <div className="comments-list">
            <h3 className="section-subtitle">Comments <span>({post.commentCount})</span></h3>
            {
              comments.length !== 0 ? comments.map(comment => <Comment key={comment.id} comment={comment} post={post.id} />) : <p className="no-comments">There are no comments yet.</p>
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
