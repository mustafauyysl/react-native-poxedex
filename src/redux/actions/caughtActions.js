import * as actionTypes from './actionTypes';

export const caughtPokemon = (pokemon) => {
  return {type: actionTypes.CAUGHT_POKEMON, payload: pokemon};
};

export const releasePokemon = (pokemon) => {
  return {type: actionTypes.RELEASE_POKEMON, payload: pokemon};
};
