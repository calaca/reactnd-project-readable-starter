import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
      body: form.body,
      author: form.author,
      category: form.category
    }));

    this.setState({
      message: 'New post added successfully.'
    });

    this.props.history.goBack();
  }

  render() {
    const { categories } = this.props;
    const { message } = this.state;

    return (
      <PostForm
        title='New Post'
        categories={categories}
        message={message}
        onSubmitHandler={this.newPost}
      />
    )
  }
}

const mapStateToProps = ({ categoryReducer }) => {
  return categoryReducer;
};

AddPost.propTypes = {
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AddPost);
