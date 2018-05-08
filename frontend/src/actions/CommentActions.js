import {
  getPostComments,
  voteComment,
  addComment,
  deleteComment,
  editComment
} from '../utils/PostsAPI';
import { loadInitialData, loadPostData } from './PostActions';

// Action Type Constants
export const actionTypes = {
  SET_COMMENTS: 'SET_COMMENTS',
  UPDATE_COMMENT_VOTE_SCORE: 'UPDATE_COMMENT_VOTE_SCORE',
  SET_NEW_COMMENT: 'SET_NEW_COMMENT',
  UNSET_COMMENT: 'UNSET_COMMENT',
  ALTER_COMMENT: 'ALTER_COMMENT'
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

export function setNewComment(comment) {
  return {
    type: actionTypes.SET_NEW_COMMENT,
    comment
  }
};

export function unsetComment(comment) {
  return {
    type: actionTypes.UNSET_COMMENT,
    comment
  }
};

export function alterComment(comment) {
  return {
    type: actionTypes.ALTER_COMMENT,
    comment
  }
};

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

export function addNewComment(comment, post) {
  return dispatch => {
    addComment(comment)
      .then(newComment => {
        dispatch(setNewComment(newComment));
        dispatch(loadPostData(post));
        dispatch(loadInitialData());
      })
  }
};

export function removeComment(id, post) {
  return dispatch => {
    deleteComment(id)
      .then(comment => {
        dispatch(unsetComment(comment));
        dispatch(loadPostData(post));
        dispatch(loadInitialData());
      })
  }
};

export function updateComment(id, timestamp, body, post) {
  return dispatch => {
    editComment(id, timestamp, body)
      .then(comment => {
        dispatch(alterComment(comment));
        dispatch(loadPostData(post));
        dispatch(loadInitialData());
      })
  }
};
