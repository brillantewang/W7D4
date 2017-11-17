import React from 'react';

const ItemDetail = ({item}) => {
  return (<div>
    {item.name}
    <ul>
      <li>Happiness: {item.happiness}</li>
      <li>Price: {item.price}</li>
    </ul>
  </div>);
};

export default ItemDetail;
