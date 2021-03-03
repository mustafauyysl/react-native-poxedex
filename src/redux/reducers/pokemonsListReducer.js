import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const pokemonsListReducer = (state = initialState.pokemons, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default pokemonsListReducer;
