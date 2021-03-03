import {combineReducers} from 'redux';
import pokemonsListReducer from './pokemonsListReducer';
import selectPokemonReducer from './selectPokemonReducer';
import caughtReducer from './caughtReducer';
import changeThemeReducer from './changeThemeReducer';

const rootReducer = combineReducers({
  pokemonsListReducer,
  selectPokemonReducer,
  caughtReducer,
  changeThemeReducer,
});

export default rootReducer;
