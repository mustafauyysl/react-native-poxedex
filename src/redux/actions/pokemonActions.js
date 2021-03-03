import * as actionTypes from './actionTypes';
import api from '../../utils/api';
import I18n from '../../lang/_i18n';

const getPokemonsSuccess = (pokemons) => {
  return {type: actionTypes.GET_POKEMONS_SUCCESS, payload: pokemons};
};

export const getPokemons = () => {
  return async (dispatch) => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    const response = await api.get(url);
    const results = response.data.results;
    dispatch(getPokemonsSuccess(results));
  };
};

const selectPokemonSuccess = (pokemon) => {
  return {type: actionTypes.SELECT_POKEMON_SUCCESS, payload: pokemon};
};

export const selectPokemon = (pokemonId) => {
  return async (dispatch) => {
    const pokemon = {
      name: '',
      description: '',
      color: '',
      types: [],
      features: [],
    };
    const response = await api.get(pokemonId + '/');
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
    await api.get(pokemonSpeciesUrl).then((res) => {
      res.data.flavor_text_entries.some((flavor) => {
        if (flavor.language.name === I18n.locales.no)
          pokemon.description = flavor.flavor_text.replace(/\s/g, ' ');
      });
    });
    const stats = response.data.stats.map((stats) => ({
      name: stats.stat.name,
      percent: stats.base_stat,
    }));
    pokemon.features = stats;
    pokemon.color = response.data.types[0].type.name;
    pokemon.types = response.data.types.map((type) => type.type.name);
    dispatch(selectPokemonSuccess(pokemon));
  };
};
