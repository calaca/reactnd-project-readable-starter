import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../../actions/PostActions';
import { loadCategories } from '../../actions/CategoryActions';
import PostForm from '../PostForm/PostForm';

class AddPost extends Component {
  state = {
    message: ''
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadCategories());
  }

  newPost = (e, form) => {
    e.preventDefault();
    e.target.reset();

    const { dispatch } = this.props;

    dispatch(addNewPost({
      id: Date.now().toString(),
      timestamp: Date.now(),
      title: form.title,
      body: form.comment,
      author: form.name,
      category: form.category
    }));

    this.setState({
      message: 'New post added successfully.'
    });
  }

  render() {
    const { categories } = this.props;
    const { message } = this.state;

    return (
      <PostForm
        title='New Post'
        categories={categories}
        message={message}
        newPost={this.newPost}
      />
    )
  }
}

const mapStateToProps = ({ categoryReducer }) => {
  return categoryReducer;
};

export default connect(mapStateToProps)(AddPost);
