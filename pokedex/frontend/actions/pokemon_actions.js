import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";

export const receiveAllPokemon = (payload) => ({
  type: RECEIVE_ALL_POKEMON,
  payload
});

export const receivePokemon = (payload) => ({
  type: RECEIVE_POKEMON,
  payload
});

//Thunk Action Creators

export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
    .then(payload => dispatch(receiveAllPokemon(payload)))
);

export const requestSinglePokemon = pokeID => dispatch => (
  APIUtil.fetchPokemon(pokeID)
    .then(payload => dispatch(receivePokemon(payload)))
);
