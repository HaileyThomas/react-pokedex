import React from "react";

import { Icon } from "@iconify/react";

function Header() {
  return (
    <section className="header-container">
      <div className="title-container">
        <h1 className="main-header">React Pokedex</h1>
        <Icon icon="mdi:pokeball" className="header-pokeball" />
      </div>
      <div className="nav-container">
        <button className="nav-btn">About</button>
      </div>
    </section>
  );
}

export default Header;
