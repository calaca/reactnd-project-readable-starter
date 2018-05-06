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
    default:
      return state;
  }
};
