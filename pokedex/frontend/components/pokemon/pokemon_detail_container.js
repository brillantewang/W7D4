import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  let pokeID = parseInt(ownProps.match.params.pokeID);
  let poke = state.entities.pokemon[pokeID];


  return {
    pokeID: pokeID,
    poke: poke
  };
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokeID) => dispatch(requestSinglePokemon(pokeID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
