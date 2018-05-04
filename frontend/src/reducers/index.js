import { LOAD_INITIAL_DATA, SET_LOADING } from '../actions/constants';

const initialState = {
  loading: true,
  posts: []
};

export function initReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_INITIAL_DATA:
      return {
        ...state,
        posts: action.posts
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.status
      }
    default:
      return state
  }
};
