import React, { Component } from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(EditPost);
