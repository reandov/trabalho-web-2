import React, { useState, useEffect } from "react";

import "./App.css";

import api from "./services/api";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardList from "./components/Card-List/Card-List";
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
    if (data.id === "") {
      const response = await api.post("/eventos", data);
      setEventos([...eventos, response.data]);
    } else {
      let response = await api.put(`/eventos/${data.id}`, data);
      response = await api.get("/eventos");
      setEventos(response.data);
    }
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Form onSubmit={handleAddEvento} />
        <CardList eventos={eventos} api={api} setEventos={setEventos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
