import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

import "./Card-List.css";

import Card from "../Card/Card";

function CardList({ eventos, api, setEventos }) {
  async function handleDestroyEvento(id) {
    let response = await api.delete(`/eventos/${id}`);
    response = await api.get("/eventos");
    setEventos(response.data);
  }

  function printTicket() {
    const orderHtml = `<html><head><title></title></head><body> ${eventos
      .map(
        (evento) =>
          `</br><hr></br><strong>Título do Evento: </strong>${evento.titulo}</br><strong>Descrição do Evento: </strong>${evento.descricao}</br><strong>Data de Inicio: </strong>${evento.data[0].inicio}</br><strong>Data de Encerramento: </strong>${evento.data[0].fim}</br>`
      )
      .join("")} </body></html>`;

    document.body.innerHTML = orderHtml;
    window.print();
    document.location.reload();
  }

  return (
    <div className="card-list">
      <div className="list-header">
        <h1>Lista de Eventos</h1>
        <button onClick={printTicket}>
          <FontAwesomeIcon
            icon={faPrint}
            style={{ marginRight: 8 + "px" }}
            size="lg"
          />
        </button>
      </div>
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
