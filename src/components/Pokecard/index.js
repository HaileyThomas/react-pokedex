import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

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
    <section className="pokemon-card-container">
      <div className="pokemon-card">
        <div className="pokemon-card-header">
          <p className="card-header">ID: {pokemon.id}</p>
          <Icon icon="bx:expand-alt" className="card-expand-icon" />
        </div>
        <div className="poke-ball-container">
          <div className="poke-ball">
            <div className="poke-ball-image">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="card-img"
              />
            </div>
          </div>
        </div>
        <div className="poke-card-name">
          <h2 className="card-name">{pokemon.name}</h2>
        </div>
      </div>
    </section>
  );
}

export default Pokecard;
