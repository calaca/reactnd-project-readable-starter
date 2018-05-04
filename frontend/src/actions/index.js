import { LOAD_INITIAL_DATA, SET_LOADING } from './constants';
import { getPosts } from '../util/PostsAPI';

// Sync action creators

export function setPosts(posts) {
  return {
    type: LOAD_INITIAL_DATA,
    posts
  }
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    status
  }
}

// Async action creators

export function loadInitialData() {
  return dispatch => {
    getPosts()
      .then(posts => {
        dispatch(setPosts(posts));
        dispatch(setLoading(false));
      })
  }
};
