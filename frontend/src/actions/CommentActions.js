import { getPostComments, voteComment } from '../utils/PostsAPI';

// Action Type Constants
export const actionTypes = {
  SET_COMMENTS: 'SET_COMMENTS',
  UPDATE_COMMENT_VOTE_SCORE: 'UPDATE_COMMENT_VOTE_SCORE'
};

// Sync Actions
export function setComments(comments) {
  return {
    type: actionTypes.SET_COMMENTS,
    comments
  }
}

export function updateCommentVoteScore(id, voteScore) {
  return {
    type: actionTypes.UPDATE_COMMENT_VOTE_SCORE,
    id,
    voteScore
  }
}

// Async Actions
export function loadComments(id) {
  return dispatch => {
    getPostComments(id)
      .then(comments => dispatch(setComments(comments)))
  }
};

export function submitCommentVoteScore(id, option) {
  return dispatch => {
    voteComment(id, option)
      .then(comment => dispatch(updateCommentVoteScore(comment.id, comment.voteScore)))
  }
};
