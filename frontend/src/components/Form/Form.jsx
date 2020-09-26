import React, { useState } from "react";

import "./Form.css";

function Form({ onSubmit }) {
  const [evento_id, setEventoID] = useState("");
  const [evento_titulo, setEventoTitulo] = useState("");
  const [evento_descricao, setEventoDescricao] = useState("");
  const [evento_dinicio, setEventoDInicio] = useState("");
  const [evento_dfim, setEventoDFim] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      id: evento_id,
      titulo: evento_titulo,
      descricao: evento_descricao,
      data: [
        {
          inicio: evento_dinicio,
          fim: evento_dfim,
        },
      ],
    });

    setEventoID("");
    setEventoTitulo("");
    setEventoDescricao("");
    setEventoDInicio("");
    setEventoDFim("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="evento_id">
          ID do Evento <strong>(em caso de Alteração)</strong>
        </label>
        <input
          type="number"
          name="evento_id"
          id="evento_id"
          value={evento_id}
          onChange={(e) => setEventoID(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="evento_titulo">Título do Evento</label>
        <input
          name="evento_titulo"
          id="evento_titulo"
          required
          value={evento_titulo}
          onChange={(e) => setEventoTitulo(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="evento_descricao">Descrição do Evento</label>
        <input
          name="evento_descricao"
          id="evento_descricao"
          required
          value={evento_descricao}
          onChange={(e) => setEventoDescricao(e.target.value)}
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="evento_dinicio">Data de Inicio</label>
          <input
            type="date"
            name="evento_dinicio"
            id="evento_dinicio"
            required
            value={evento_dinicio}
            onChange={(e) => setEventoDInicio(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="evento_dfim">Data de Encerramento</label>
          <input
            type="date"
            name="evento_dfim"
            id="evento_dfim"
            required
            value={evento_dfim}
            onChange={(e) => setEventoDFim(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Criar Evento</button>
    </form>
  );
}

export default Form;
