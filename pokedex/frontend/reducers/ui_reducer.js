import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const uiReducer = (state = 0, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_POKEMON:
      newState = action.payload.pokemon.id;
      return newState;
    default:
      return state;
  }
};


export default uiReducer;
