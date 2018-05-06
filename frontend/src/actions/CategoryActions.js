import { getCategories } from '../utils/PostsAPI';

// Action Type Constants
export const actionTypes = {
  SET_CATEGORIES: 'SET_CATEGORIES'
};

// Sync Actions
export function setCategories(categories) {
  return {
    type: actionTypes.SET_CATEGORIES,
    categories
  }
};

// Async Actions
export function loadCategories() {
  return dispatch => {
    getCategories()
      .then(categories => dispatch(setCategories(categories)))
  }
};
