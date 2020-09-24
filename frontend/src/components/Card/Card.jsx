import React from "react";

import "./Card.css";

import logo1 from "./logos/logo1.png";

export default ({ evento }) => (
  <li className="event-item">
    <header>
      <img src={logo1} alt="logo" />
      <div className="event-info">
        <strong>{evento.titulo}</strong>
        <p>Data de Inicio: {evento.data[0].inicio}</p>
        <p>Data de Encerramento: {evento.data[0].fim}</p>
        <span>{evento.descricao}</span>
      </div>
    </header>
  </li>
);
