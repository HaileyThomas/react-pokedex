import React from "react";
import { Icon } from "@iconify/react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <section className="modal-container" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pokedex-top">
          <div className="big-circle-container">
            <div className="big-circle"></div>
          </div>
          <div className="three-circle-close-container">
            <div className="three-circle-container">
              <div className="dark-red-circle"></div>
              <div className="yellow-circle"></div>
              <div className="green-circle"></div>
            </div>
            <Icon
              icon="fa:close"
              className="modal-close"
              onClick={props.onClose}
            />
          </div>
        </div>
        <div className="pokedex-screen">
          <div className="screen-top">
            <div className="small-red-circle"></div>
            <div className="small-red-circle"></div>
          </div>
          <div className="screen-main">
            <div className="image-container">
              <img
                src={props.pokemon.sprites.other.dream_world.front_default}
                alt=""
                className="modal-image"
              />
            </div>
            <div className="id-container">
              <p className="id-text">NO. {props.pokemon.id}</p>
            </div>
          </div>
          <div className="screen-bottom">
            <div className="big-red-circle"></div>
            <Icon icon="el:lines" className="modal-lines" />
          </div>
        </div>
        <div className="pokedex-buttons">
          <div className="name-container">{props.pokemon.name}</div>
          <div className="two-buttons-container">
            <div className="button-dark-red"></div>
            <div className="button-blue"></div>
          </div>
          <div className="plus-sign-container">
            <Icon icon="icon-park-outline:game-two" className="buttons-icon" />
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
