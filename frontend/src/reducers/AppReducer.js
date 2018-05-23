import { actionTypes } from '../actions/AppActions';

const initialState = {
  orderByTarget: 'voteScore'
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ODER_BY_TARGET:
      return {
        orderByTarget: action.target
      }
    default:
      return state;
  }
};
