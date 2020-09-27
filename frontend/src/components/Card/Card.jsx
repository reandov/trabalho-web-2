import React from "react";

import "./Card.css";

import logo1 from "./logos/logo1.png";

function Card({ evento, handleDestroyEvento }) {
  async function handleDelete() {
    await handleDestroyEvento(evento.id);
  }

  return (
    <li className="event-item">
      <header>
        <img src={logo1} alt="logo" />
        <div className="event-info">
          <strong>{evento.titulo}</strong>
          <p>ID do Evento: {evento.id}</p>
          <p>Data de Inicio: {evento.data[0].inicio}</p>
          <p>Data de Encerramento: {evento.data[0].fim}</p>
          <span>{evento.descricao}</span>
        </div>
      </header>
      <div className="button-options">
        <button onClick={handleDelete}>Excluir</button>
      </div>
    </li>
  );
}

export default Card;
