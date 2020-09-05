import React from 'react';

const PokemonDetails = (props) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <h3>{props.name}</h3>
      <img src={props.img} alt="Went wrong..." height="150px" />
    </div>
  );
};

export default PokemonDetails;
