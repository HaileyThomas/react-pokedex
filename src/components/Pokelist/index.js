import React, { useState, useEffect } from "react";

function Pokelist() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        data.results.forEach(function (pokemon) {
          let url = pokemon.url;
          fetch(url)
            .then((response) => response.json())
            .then(function (pokeData) {
              console.log(pokeData);
              setData(pokeData);
            });
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  const pokemon = data;

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
      <div className="results-container">results will go here</div>
    </section>
  );
}

export default Pokelist;
