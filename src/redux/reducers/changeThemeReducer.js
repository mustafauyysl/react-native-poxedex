import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const changeThemeReducer = (state = initialState.theme, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default changeThemeReducer;
