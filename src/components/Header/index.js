import React from "react";
import About from "../About";

function Header() {
  return (
    <section className="header-container">
      <div className="title-container">
        <h1>Pokedex</h1>
      </div>
      <div className="nav-container">
        <About />
      </div>
    </section>
  );
}

export default Header;
