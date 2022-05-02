import React from "react";
import { Icon } from "@iconify/react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <section className="modal-container" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-container">
          <h2 className="modal-header">{props.pokemon.name}</h2>
          <Icon
            icon="fa:close"
            className="modal-close"
            onClick={props.onClose}
          />
        </div>
        <div className="modal-body-container">
          <div className="pokedex-container">
            <div className="pokedex-top">
              <div className="big-circle"></div>
              <div className="three-circle-container"></div>
            </div>
            <div className="pokedex-screen">
              <div className="screen-top"></div>
              <div className="screen-main"></div>
              <div className="screen-bottom"></div>
            </div>
            <div className="pokedex-buttons">
              <div className="name-container">{props.pokemon.name}</div>
              <div className="two-buttons-container"></div>
              <div className="plus-sign-container">
                <Icon icon="emojione-v1:heavy-plus-sign" className="plus-btn" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer-container">
          <p className="modal-footer" onClick={props.onClose}>
            close pokedex
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modal;
