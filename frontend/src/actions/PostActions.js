import {
  getPosts,
  getPostsByCategory,
  votePost,
  getPostDetails,
  addPost,
  deletePost,
  editPost
} from '../utils/PostsAPI';

// Action Type Constants
export const actionTypes = {
  SET_INITIAL_DATA: 'SET_INITIAL_DATA',
  SET_LOADING: 'SET_LOADING',
  UPDATE_POST_VOTE_SCORE: 'UPDATE_POST_VOTE_SCORE',
  CHANGE_ODER_BY_TARGET: 'CHANGE_ODER_BY_TARGET',
  SET_POST_DATA: 'SET_POST_DATA',
  SET_NEW_POST: 'SET_NEW_POST',
  UNSET_POST: 'UNSET_POST',
  ALTER_POST: 'ALTER_POST'
};

// Sync Actions
export function setPosts(posts) {
  return {
    type: actionTypes.SET_INITIAL_DATA,
    posts
  }
};

export function setLoading(status) {
  return {
    type: actionTypes.SET_LOADING,
    status
  }
};

export function updatePostVoteScore(id, voteScore) {
  return {
    type: actionTypes.UPDATE_POST_VOTE_SCORE,
    id,
    voteScore
  }
};

export function changeOrderByTarget(target) {
  return {
    type: actionTypes.CHANGE_ODER_BY_TARGET,
    target
  }
};

export function setPostData(post) {
  return {
    type: actionTypes.SET_POST_DATA,
    post
  }
};

export function setNewPost(post) {
  return {
    type: actionTypes.SET_NEW_POST,
    post
  }
};

export function unsetPost(post) {
  return {
    type: actionTypes.UNSET_POST,
    post
  }
};

export function alterPost(post) {
  return {
    type: actionTypes.ALTER_POST,
    post
  }
};

// Async Actions
export function loadInitialData() {
  return dispatch => {
    getPosts()
      .then(posts => {
        dispatch(setPosts(posts));
        dispatch(setLoading(false));
      })
  }
};

export function loadInitialDataByCategory(category) {
  return dispatch => {
    getPostsByCategory(category)
      .then(posts => dispatch(setPosts(posts)))
  }
};

export function submitPostVoteScore(id, option) {
  return dispatch => {
    votePost(id, option)
      .then(post => dispatch(updatePostVoteScore(post.id, post.voteScore)))
  }
};

export function loadPostData(id) {
  return dispatch => {
    getPostDetails(id)
      .then(post => dispatch(setPostData(post)))
  }
};

export function addNewPost(post) {
  return dispatch => {
    addPost(post)
      .then(newPost => {
        dispatch(setNewPost(newPost));
        dispatch(loadInitialData());
      })
  }
};

export function removePost(id) {
  return dispatch => {
    deletePost(id)
      .then(post => dispatch(unsetPost(post)))
  }
};

export function updatePost(id, title, body) {
  return dispatch => {
    editPost(id, title, body)
      .then(post => dispatch(alterPost(post)))
  }
};
