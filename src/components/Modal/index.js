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
        <div className="modal-body-container"></div>
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
