import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import './PostDetails.css';

class PostDetails extends Component {
  render() {
    return (
      <main className="post-details">
        <div className="posts-wrapper">
          <article className="post">
            <div className="vote">
              <span className="up"></span>
              <span className="count">5</span>
              <span className="down"></span>
            </div>
            <div className="content">
              <h3 className="title"><a href="">This is the post title</a></h3>
              <p className="details">submitted by <span>person</span></p>
              <div className="comments">
                <p>
                  <span className="count">3</span> comments
            </p>
              </div>
              <div className="info-actions">
                <span className="category">category</span>
                <button className="edit">edit</button>
                <button className="delete">delete</button>
              </div>
            </div>
            <div className="body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui maxime a id non culpa ducimus itaque. Distinctio, nihil maxime. Cum assumenda reprehenderit numquam est ea odit quisquam porro vitae vel.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, reiciendis quos ipsam sed maiores perferendis vitae voluptatum laudantium cupiditate voluptatibus laboriosam doloremque tempora id odit labore, fugit natus, ducimus eos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium consectetur modi neque asperiores, dignissimos earum aliquam culpa, quis hic in, libero officia sed. Necessitatibus unde repellat nesciunt aspernatur numquam!
              </p>
            </div>
          </article>
        </div>
        <div className="comments-wrapper">
          <form>
            <input type="text" name="name" placeholder="Your name" />
            <textarea name="comment" id="comment" placeholder="Type your message here." />
            <input className="btn-primary" type="submit" value="save" />
          </form>
          <div className="comments-list">
            <Comment />
            <Comment />
          </div>
        </div>
      </main>
    )
  }
}

export default PostDetails;
