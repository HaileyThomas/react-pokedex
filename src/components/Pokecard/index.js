import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Modal from "../Modal";

function Pokecard(pokemonData) {
  const [pokemon, setPokemon] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getPokemonData().then((data) => {
      setPokemon(data);
    });
  }, []);

  const getPokemonData = () => {
    return fetch(pokemonData.url).then((response) => response.json());
  };

  return (
    <section className="pokemon-card-container">
      <div className="pokemon-card">
        <div className="pokemon-card-header">
          <p className="card-header">ID: {pokemon.id}</p>
          <Icon
            icon="bx:expand-alt"
            className="card-expand-icon"
            onClick={() => setShow(true)}
          />
        </div>
        <div className="poke-ball-container">
          <div className="poke-ball">
            <div className="poke-ball-image">
              <div className="poke-card-name">
                <h2 className="card-name" onClick={() => setShow(true)}>
                  {pokemon.name}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show} pokemon={pokemon} />
    </section>
  );
}

export default Pokecard;
