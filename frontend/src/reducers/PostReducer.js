import { actionTypes } from '../actions/PostActions';

const initialState = {
  loading: true,
  posts: [],
  post: {},
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
      let { posts, post } = state;

      posts = posts.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            voteScore: action.voteScore
          }
        }
        return post;
      });

      if (post) {
        post = {
          ...post,
          voteScore: action.voteScore
        }
      }

      return {
        ...state,
        posts,
        post
      }
    case actionTypes.SET_POST_DATA:
      return {
        ...state,
        post: action.post
      }
    case actionTypes.SET_NEW_POST:
      posts = state.posts;
      posts.push(action.post);

      return {
        ...state,
        posts
      }
    case actionTypes.UNSET_POST:
      posts = state.posts;
      posts = posts.map(post => {
        if (post.id === action.post.id) {
          return {
            ...action.post
          }
        }
        return post;
      });

      return {
        ...state,
        posts
      }
    case actionTypes.ALTER_POST:
      posts = state.posts;
      posts = posts.map(post => {
        if (post.id === action.post.id) {
          return {
            ...action.post
          }
        }
        return post;
      });

      return {
        ...state,
        posts
      }
    default:
      return state
  }
};
