import React, { useState, useEffect } from "react";
import Pokecard from "../Pokecard";

function Pokelist() {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const getAllPokemon = () => {
    return fetch(URL).then((response) => response.json());
  };

  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon().then((data) => {
      setAllPokemon(data);
    });
  }, []);

  return (
    <section className="pokelist-container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search pokemon by name"
          />
        </label>
      </div>
      <div className="results-container">
        {Object.entries(allPokemon)[3] &&
          Object.entries(allPokemon)[3][1].map((pokemonData, index) => {
            return <Pokecard key={index} {...pokemonData} />;
          })}
      </div>
    </section>
  );
}

export default Pokelist;
