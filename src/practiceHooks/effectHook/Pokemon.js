import React, { useState, useEffect } from 'react';
import PokemonDetails from './PokemonDetails';

const Pokemon = (props) => {
  const [pokemonData, setPokemonDetails] = useState(null);

  useEffect(() => {
    console.log('inside effect');

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((data) => data.json())
      .then(({ name, sprites }) => {
        setPokemonDetails({ name, img: sprites.front_default });
      });
  }, []);

  return pokemonData === null ? (
    <p>Loading...</p>
  ) : (
    <PokemonDetails name={pokemonData.name} img={pokemonData.img} />
  );
};

const PokemonGallery = () => {
  const pokemonList = Array.from({ length: 10 }).map((x, i) => i + 1);

  const pokemons = pokemonList.map((id) => <Pokemon id={id} key={id} />);

  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{pokemons}</div>;
};

export default PokemonGallery;
