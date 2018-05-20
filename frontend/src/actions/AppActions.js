// Action Type Constants
export const actionTypes = {
  CHANGE_ODER_BY_TARGET: 'CHANGE_ODER_BY_TARGET'
};

// Action Creators
export function changeOrderByTarget(target) {
  return {
    type: actionTypes.CHANGE_ODER_BY_TARGET,
    target
  }
};
