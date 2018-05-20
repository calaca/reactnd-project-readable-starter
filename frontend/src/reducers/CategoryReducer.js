import { actionTypes } from '../actions/CategoryActions';

const initialState = {
  categories: [],
  loading: true
};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.status
      }
    default:
      return state;
  }
};
