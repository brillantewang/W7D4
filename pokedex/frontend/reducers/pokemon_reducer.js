import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = {};
      action.payload.pokemon.forEach(pokemon => {
        newState[pokemon.id] = pokemon;
      });
      return merge({}, state, newState);
      // newState = action.payload.pokemon;
      // console.log(merge({}, state, newState));
      // return merge({}, state, newState);
    // case RECEIVE_POKEMON:
    //   // newState = action.payload.pokemon;
    //   return merge({}, state, newState);
    default:
      return state;
  }
};

export default pokemonReducer;
