import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const caughtReducer = (state = initialState.capturedPokemons, action) => {
  switch (action.type) {
    case actionTypes.CAUGHT_POKEMON:
      var addedItem = state.find((c) => c.id === action.payload.id);
      if (addedItem) {
        var newState = state.map((pokemon) => {
          if (pokemon.id === action.payload.id) {
            console.log(pokemon);
            return {...pokemon, favourite: !addedItem.favourite};
          }
          return pokemon;
        });
        return newState;
      } else {
        return [...state, {...action.payload}];
      }
    case actionTypes.RELEASE_POKEMON:
      const newState2 = state.filter(
        (pokemon) => pokemon.id !== action.payload.id,
      );
      return newState2;
    default:
      return state;
  }
};

export default caughtReducer;
