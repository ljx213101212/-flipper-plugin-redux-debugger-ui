import {SET_CURRENT_MODE} from '../constants';

// export const setCurrentMode = mode => async dispatch => {
//   return undefined;
// };

export const setCurrentMode = mode => async dispatch => {
  return dispatch({
    type: SET_CURRENT_MODE,
    payload: {mode},
  });
};
// export function setCurrentMode(mode) {
//   return {
//     type: SET_CURRENT_MODE,
//     payload: {mode},
//   };
// }
