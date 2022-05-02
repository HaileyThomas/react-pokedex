import React, { useState, useEffect } from "react";

function Pokecard(pokemonData) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemonData().then((data) => {
      setPokemon(data);
    });
  }, []);

  const getPokemonData = () => {
    return fetch(pokemonData.url).then((response) => response.json());
  };

  console.log(pokemon);

  return (
    <section className="pokemon-card">
      <h2>{pokemonData.name}</h2>
      <br />
      <p>{pokemonData.url}</p>
      <br />
    </section>
  );
}

export default Pokecard;
