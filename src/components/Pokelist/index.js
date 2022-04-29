import React from "react";

function Pokelist() {
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
