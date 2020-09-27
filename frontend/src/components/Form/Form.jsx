import React, { useState } from "react";

import "./Form.css";

function Form({ onSubmit }) {
  const [id, setID] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      id,
      titulo,
      descricao,
      data: [
        {
          inicio,
          fim,
        },
      ],
    });

    setID("");
    setTitulo("");
    setDescricao("");
    setInicio("");
    setFim("");
  }

  return (
    <div className="form-component">
      <h1>Criar Evento</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="id">
            ID do Evento <strong>(em caso de Alteração)</strong>
          </label>
          <input
            type="number"
            name="id"
            id="id"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="titulo">Título do Evento</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            required
            value={titulo}
            maxLength="32"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="descricao">Descrição do Evento</label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            required
            value={descricao}
            maxLength="128"
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="inicio">Data de Inicio</label>
            <input
              type="date"
              name="dinicio"
              id="dinicio"
              required
              value={inicio}
              onChange={(e) => setInicio(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="fim">Data de Encerramento</label>
            <input
              type="date"
              name="dfim"
              id="dfim"
              required
              value={fim}
              onChange={(e) => setFim(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Criar Evento</button>
      </form>
    </div>
  );
}

export default Form;
