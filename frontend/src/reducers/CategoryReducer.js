import { actionTypes } from '../actions/CategoryActions';

const initialState = {
  categories: []
};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state;
  }
};
