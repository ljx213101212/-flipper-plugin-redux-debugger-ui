import {SET_CURRENT_MODE} from '../constants';
const initialState = {
  mode: undefined,
};
const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MODE:
      return {
        ...state,
        mode: action.payload.mode,
      };
    default:
      return state;
  }
};
export default modeReducer;
