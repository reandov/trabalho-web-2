import React, { useState, useEffect } from "react";

import "./App.css";

import api from "./services/api";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

function App() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function loadEventos() {
      const response = await api.get("/eventos");

      setEventos(response.data);
    }

    loadEventos();
  }, []);

  async function handleAddEvento(data) {
    const response = await api.post("./eventos", data);
    setEventos([...eventos, response.data]);
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <div>
          <h1>Lista de Eventos</h1>
          <ul className="card-holder">
            {eventos.map((evento) => (
              <Card key={evento._id} evento={evento} />
            ))}
          </ul>
        </div>
        <aside>
          <h1>Criar Evento</h1>
          <Form onSubmit={handleAddEvento} />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
