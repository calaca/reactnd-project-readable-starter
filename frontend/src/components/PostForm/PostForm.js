import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewPost } from '../../actions/PostActions';
import { loadCategories } from '../../actions/CategoryActions';
import './PostForm.css';

class PostForm extends Component {
  state = {
    form: {
      category: 'redux'
    },
    message: ''
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadCategories());
  }

  newPost = (e) => {
    e.preventDefault();
    e.target.reset();

    const { form } = this.state;
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
    const { categories } = this.props;
    const { message } = this.state;
    const path = this.props.match.path;
    const title = path === '/post/new' ? 'New Post' : 'Edit Post';
    return (
      <main className="new-edit-post">
        <section className="form-wrapper">
          <h2 className="section-title">{title}</h2>
          {
            message && <p className="message">{message}</p>
          }
          <form onSubmit={this.newPost}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Your name"
            />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Post title"
            />
            <textarea
              name="comment"
              id="comment"
              value={this.state.comment}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Post text/body"
            />
            <select
              name="category"
              id="category"
              value={this.state.category}
              onChange={e => this.onChangeHandler(e)}
            >
              {
                categories.map(category => <option key={category.path} value={category.name}>{category.name}</option>)
              }
            </select>
            <input className="btn-primary" type="submit" value="save" />
          </form>
        </section>
      </main>
    )
  }
}

const mapStateToProps = ({ categoryReducer }) => {
  return categoryReducer;
};

export default connect(mapStateToProps)(PostForm);
