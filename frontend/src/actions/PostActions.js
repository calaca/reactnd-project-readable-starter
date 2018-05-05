import { getPosts, getPostsByCategory, votePost } from '../util/PostsAPI';

// Action Type Constants
export const actionTypes = {
  SET_INITIAL_DATA: 'SET_INITIAL_DATA',
  SET_LOADING: 'SET_LOADING',
  UPDATE_POST_VOTE_SCORE: 'UPDATE_POST_VOTE_SCORE',
  CHANGE_ODER_BY_TARGET: 'CHANGE_ODER_BY_TARGET'
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
