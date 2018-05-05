import { actionTypes } from '../actions/PostActions';

const initialState = {
  loading: true,
  posts: [],
  orderByTarget: 'voteScore'
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_INITIAL_DATA:
      return {
        ...state,
        posts: action.posts
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.status
      }
    case actionTypes.UPDATE_POST_VOTE_SCORE:
      let posts = state.posts;
      posts = posts.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            voteScore: action.voteScore
          };
        }
        return post;
      });
      return {
        ...state,
        posts
      }
    case actionTypes.CHANGE_ODER_BY_TARGET:
      return {
        ...state,
        orderByTarget: action.target
      }
    default:
      return state
  }
};
