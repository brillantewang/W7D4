import merge from 'lodash/merge';
import { values } from 'lodash';
import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = {};
      action.payload.items.forEach(item => {newState[item.id] = item;});
      return merge({}, state, newState);

    case RECEIVE_POKEMON:
      newState = {};
      action.payload.items.forEach(item => {newState[item.id] = item;});
      return merge({}, state, newState);
      
    default:
      return state;
  }

};


export default itemsReducer;
