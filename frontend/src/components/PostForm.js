import React, { Component } from 'react';
import './PostForm.css';

class PostForm extends Component {
  render() {
    return (
      <main className="new-edit-post">
        <section className="form-wrapper">
          <h2 className="section-title">New/Edit Post</h2>
          <form>
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="title" placeholder="Post title" />
            <textarea name="comment" id="comment" placeholder="Post text/body" />
            <input className="btn-primary" type="submit" value="save" />
          </form>
        </section>
      </main>
    )
  }
}

export default PostForm;
