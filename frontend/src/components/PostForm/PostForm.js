import React, { PureComponent } from 'react';
import './PostForm.css';

class PostForm extends PureComponent {
  state = {
    form: {
      author: '',
      title: '',
      body: '',
      category: this.props.categories[0].name || 'redux'
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

  componentWillReceiveProps(nextProps) {
    const post = nextProps.post;

    if (post && Object.keys(post).length !== 0) {
      this.setState({
        form: {
          ...post
        }
      });
    }
  }

  render() {
    const { title, categories, message, onSubmitHandler } = this.props;
    const { form } = this.state;

    return (
      <main className="new-edit-post">
        <section className="form-wrapper">
          <h2 className="section-title">{title}</h2>
          {
            message && <p className="message">{message}</p>
          }
          <label htmlFor="category">Category</label>
          <select
            disabled={title === 'Edit Post' ? true : false}
            name="category"
            id="category"
            value={form.category}
            onChange={e => this.onChangeHandler(e)}
          >
            {
              categories.map(category => <option key={category.path} value={category.name}>{category.name}</option>)
            }
          </select>
          <form onSubmit={(e) => onSubmitHandler(e, form)}>
            <input
              disabled={title === 'Edit Post' ? true : false}
              type="text"
              name="author"
              value={form.author}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Your name"
            />
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={e => this.onChangeHandler(e)}
              placeholder="Post title"
            />
            <textarea
              name="body"
              id="body"
              value={form.body}
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
