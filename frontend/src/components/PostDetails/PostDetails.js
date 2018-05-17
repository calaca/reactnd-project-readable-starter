import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import marked from 'marked';
import Comment from '../Comment/Comment';
import NotFound from '../NotFound/NotFound';
import dateFormatter from '../../helpers/dateFormatter';
import { loadPostData, submitPostVoteScore, removePost } from '../../actions/PostActions';
import { loadComments, addNewComment, updateComment } from '../../actions/CommentActions';
import './PostDetails.css';

class PostDetails extends Component {
  state = {
    form: {
      body: '',
      author: ''
    },
    edit: false,
    commentId: ''
  }

  /**
  * @description Loads current post data and comments
  */
  componentDidMount() {
    const id = this.props.match.params.post;
    const { dispatch } = this.props;
    dispatch(loadPostData(id));
    dispatch(loadComments(id));
  }

  /**
  * @description Deletes current post
  * @param {string} id - The current post id
  */
  deletePost = (id) => {
    const { dispatch } = this.props;
    dispatch(removePost(id));

    this.props.history.push('/');
  }

  /**
  * @description Updates the state based on form input fields
  * @param {Event} e - The onChange event
  */
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

  /**
  * @description Clears the comment form
  */
  resetForm = () => {
    this.setState({
      form: {
        body: '',
        author: ''
      },
      edit: false
    });
  }

  /**
  * @description Adds a new comment
  * @param {Event} event - The onSubmit event
  */
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
    }, id));
  }

  /**
  * @description Loads comment data to form
  * @param {string} body - The current comment body
  * @param {string} author - The current comment author
  * @param {string} commentId - The current comment id
  */
  loadCommentData = (body, author, commentId) => {
    this.setState({
      form: {
        body,
        author
      },
      edit: true,
      commentId
    });
  }


  /**
  * @description Edits a comment
  * @param {Event} event - The onSubmit event
  */
  editComment = (e) => {
    e.preventDefault();
    this.resetForm();

    const { dispatch } = this.props;
    const { commentId, form } = this.state;
    const PostId = this.props.match.params.post;

    dispatch(updateComment(commentId, Date.now(), form.body, PostId));
  }

  render() {
    const { form } = this.state;
    const { dispatch } = this.props;
    const { post } = this.props.postReducer;
    let { comments } = this.props.commentReducer;
    comments = comments.filter(comment => !comment.deleted);
    comments.sort(sortBy('-voteScore'));

    if (Object.keys(post).length === 0 || post.error) return <NotFound />;

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
              <p dangerouslySetInnerHTML={{ __html: marked(post.body) }} ></p>
            </div>
          </article>
        </section>
        <section className="comments-wrapper">
          <form
            id="comment-form"
            onSubmit={this.state.edit ? (e) => this.editComment(e) : (e) => this.addComment(e)}
          >
            <h4 className="form-title">Add or edit a comment</h4>
            <span className="info">
              <a href="https://guides.github.com/features/mastering-markdown/">Markdown</a>supported in comment body.
            </span>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Your name"
              required
              disabled={this.state.edit}
            />
            <textarea
              name="body"
              id="body"
              value={form.body}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Type your message here."
              required
            />
            <input className="btn-primary" type="submit" value="save" />
            <button className="btn-primary gray" onClick={() => this.resetForm()}>Clean Form</button>
          </form>
          <div className="comments-list">
            <h3 className="section-subtitle">Comments <span>({post.commentCount})</span></h3>
            {
              comments.length !== 0 ? comments.map(comment => <Comment key={comment.id} comment={comment} post={post.id} loadCommentData={this.loadCommentData} />) : <p className="no-comments">There are no comments yet.</p>
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
};

PostDetails.propTypes = {
  postReducer: PropTypes.object.isRequired,
  commentReducer: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(PostDetails);
