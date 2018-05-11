import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePost } from '../../actions/PostActions';
import { loadPostData } from '../../actions/PostActions';
import { loadCategories } from '../../actions/CategoryActions';
import PostForm from '../PostForm/PostForm';

class EditPost extends Component {
  state = {
    message: ''
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadCategories());
    dispatch(loadPostData(this.props.match.params.post));
  }

  editPost = (e, form) => {
    e.preventDefault();
    e.target.reset();

    const { dispatch } = this.props;

    dispatch(updatePost(form.id, form.title, form.body));

    this.setState({
      message: 'Post edited successfully.'
    });

    this.props.history.goBack();
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

  render() {
    const { categories } = this.props.categoryReducer;
    const { post } = this.props.postReducer;
    const { message } = this.state;

    return (
      <PostForm
        title='Edit Post'
        post={post}
        categories={categories}
        message={message}
        onSubmitHandler={this.editPost}
      />
    )
  }
}

const mapStateToProps = ({ postReducer, categoryReducer }) => {
  return {
    postReducer,
    categoryReducer
  }
};

EditPost.propTypes = {
  categoryReducer: PropTypes.object.isRequired,
  postReducer: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(EditPost);
