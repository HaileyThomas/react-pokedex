import React from "react";
import { Icon } from "@iconify/react";

const About = (props) => {
  if (!props.showAbout) {
    return null;
  }

  return (
    <section className="about-modal-container" onClick={props.onClose}>
      <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="about-modal-header">
          <h2 className="about-header">About React Pokedex</h2>
          <Icon
            icon="fa:close"
            className="modal-close"
            onClick={props.onClose}
          />
        </div>
        <div className="about-modal-body">
          <h2 className="about-modal-titles">About App:</h2>
          <p className="about-modal-text">
            React Pokedex is a React.js web application using PokeAPI to
            generate the pokemon data of the first generation of Pokemon. Filter
            pokemon by name or click on the expand icon / pokemon name to open
            the pokedex and see the pokemons info.
          </p>
          <h2 className="about-modal-titles">Contact:</h2>
          <a className="about-link" href="mailto:haileyraethomas@gmail.com">
            Email
          </a>
          <a
            className="about-link"
            href="https://www.linkedin.com/in/haileyraethomas/"
            target="blank"
            rel="noopener norefferrer"
          >
            LinkedIn
          </a>
          <a
            className="about-link"
            href="https://github.com/HaileyThomas"
            target="blank"
            rel="noopener norefferrer"
          >
            GitHub
          </a>
          <p className="about-modal-text">
            view source code{" "}
            <a
              className="about-link"
              href="https://github.com/HaileyThomas/react-pokedex"
              target="blank"
              rel="noopener norefferrer"
            >
              here
            </a>
          </p>
        </div>
        <div className="about-modal-footer">
          <p className="modal-footer" onClick={props.onClose}>
            (close window)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
