import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ posts }) => (
  <div className="posts-wrapper">
    {
      posts.length !== 0 ? posts.map(post => <Post key={post.id} post={post} />)
        : <p className="no-posts">No posts found for this category.</p>
    }
  </div>
);

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
