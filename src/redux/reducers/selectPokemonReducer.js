import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const pokemonsListReducer = (state = initialState.selectedPokemon, action) => {
  switch (action.type) {
    case actionTypes.SELECT_POKEMON_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default pokemonsListReducer;
