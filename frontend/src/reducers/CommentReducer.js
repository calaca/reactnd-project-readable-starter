import { actionTypes } from '../actions/CommentActions';

const initialState = {
  comments: []
};

export function commentReducer(state = initialState, action) {
  switch(action.type) {
    case actionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    case actionTypes.UPDATE_COMMENT_VOTE_SCORE:
      let { comments } = state;
      comments = comments.map(comment => {
        if (comment.id === action.id) {
          return {
            ...comment,
            voteScore: action.voteScore
          }
        }
        return comment;
      });

      return {
        ...state,
        comments
      }
    case actionTypes.SET_NEW_COMMENT:
      comments = [...state.comments];
      comments.push(action.comment);

      return {
        ...state,
        comments
      }
    case actionTypes.UNSET_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comment.id)
      }
    case actionTypes.ALTER_COMMENT:
      comments = [...state.comments];
      comments = comments.map(comment => {
        if (comment.id === action.comment.id) {
          return {
            ...action.comment
          }
        }
        return comment;
      });

      return {
        ...state,
        comments
      }
    default:
      return state;
  }
};
