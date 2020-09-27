import React from "react";

import "./Card-List.css";

import Card from "../Card/Card";

function CardList({ eventos, api, setEventos }) {
  async function handleDestroyEvento(id) {
    let response = await api.delete(`/eventos/${id}`);
    response = await api.get("/eventos");
    setEventos(response.data);
  }

  return (
    <div className="card-list">
      <h1>Lista de Eventos</h1>
      <ul>
        {eventos.map((evento) => (
          <Card
            key={evento.id}
            evento={evento}
            handleDestroyEvento={handleDestroyEvento}
          />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
