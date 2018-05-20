import { getCategories } from '../utils/PostsAPI';

// Action Type Constants
export const actionTypes = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_LOADING: 'SET_LOADING'
};

// Action Creators
export function setCategories(categories) {
  return {
    type: actionTypes.SET_CATEGORIES,
    categories
  }
};

export function setLoading(status) {
  return {
    type: actionTypes.SET_LOADING,
    status
  }
};

// Thunks
export function loadCategories() {
  return dispatch => {
    getCategories()
      .then(categories => {
        dispatch(setCategories(categories));
        dispatch(setLoading(false));
      })
  }
};
