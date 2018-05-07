import React, { Component } from 'react';
import './PostForm.css';

class PostForm extends Component {
  state = {
    form: {
      name: '',
      title: '',
      comment: '',
      category: this.props.categories[0].name
    }
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
    const { title, categories, message, newPost } = this.props;
    const post = this.props.post || {};
    console.log(post);

    return (
      <main className="new-edit-post">
        <section className="form-wrapper">
          <h2 className="section-title">{title}</h2>
          {
            message && <p className="message">{message}</p>
          }
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            defaultValue={post.category}
            // value={this.state.form.category}
            onChange={e => this.onChangeHandler(e)}
          >
            {
              categories.map(category => <option key={category.path} value={category.name}>{category.name}</option>)
            }
          </select>
          <form onSubmit={(e) => newPost(e, this.state.form)}>
            <input
              type="text"
              name="name"
              defaultValue={post.author}
              // value={this.state.form.name}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Your name"
            />
            <input
              type="text"
              name="title"
              defaultValue={post.title}
              // value={this.state.form.title}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Post title"
            />
            <textarea
              name="comment"
              id="comment"
              defaultValue={post.body}
              // value={this.state.form.comment}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Post text/body"
            />
            <input className="btn-primary" type="submit" value="save" />
          </form>
        </section>
      </main>
    )
  }
}

export default PostForm;
