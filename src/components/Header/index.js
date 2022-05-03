import React, { useState } from "react";
import About from "../About";

import { Icon } from "@iconify/react";

function Header() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="header-container">
      <div className="title-container">
        <h1 className="main-header">React Pokedex</h1>
        <Icon icon="mdi:pokeball" className="header-pokeball" />
      </div>
      <div className="nav-container">
        <button className="nav-btn" onClick={() => setShowAbout(true)}>
          About
        </button>
      </div>
      <About onClose={() => setShowAbout(false)} showAbout={showAbout} />
    </section>
  );
}

export default Header;
