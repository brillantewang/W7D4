import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokeID !== this.props.match.params.pokeID) {
      this.props.requestSinglePokemon(newProps.match.params.pokeID);
    }

  }

  componentDidMount() {
    console.log(this.props.match);
    this.props.requestSinglePokemon(this.props.match.params.pokeID);
  }

  render() {

    return (
      <div>
        <img src={this.props.poke.image_url}/>
        <h2>{this.props.poke.name}</h2>
        <ul>
          <li>Type: {this.props.poke.poke_type}</li>
          <li>Attack: {this.props.poke.attack}</li>
          <li>Defense: {this.props.poke.defense}</li>
          <li>Moves: {this.props.poke.moves}</li>
        </ul>
        <ul className="items">
          {this.props.poke.item_ids.map( (itemId) => (
            <li key={itemId}>
              <Link to={`/pokemon/${this.props.poke.id}/items/${itemId}`}>
              {itemId}
              </Link>
            </li>
          ))}
        </ul>
        <Route path="/pokemon/:pokeID/items/:itemId" component={ItemDetailContainer}/>
      </div>
    );
  }
}

export default PokemonDetail;
