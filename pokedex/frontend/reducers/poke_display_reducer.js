import { combineReducers } from 'redux';
import pokeDisplayReducer from './poke_display_reducer';

const uiReducer = combineReducers({
  pokeDisplay: pokeDisplayReducer
});

export default pokeDisplayReducer;
