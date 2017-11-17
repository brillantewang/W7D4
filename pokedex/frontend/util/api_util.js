export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon',
    method: 'GET'
  })
);

export const fetchPokemon = (pokeID) => (
  $.ajax({
    url: `api/pokemon/${pokeID}`,
    method: 'GET'
  })
);

export const createPokemon = pokemon => (
  $.ajax({
    url: '/api/pokemon',
    method: 'POST',
    data: { pokemon: pokemon }
  })
);
