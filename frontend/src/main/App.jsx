import React, { useState, useEffect } from "react";

import "./App.css";

import api from "../services/api";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";

function App() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function loadEventos() {
      const response = await api.get("/eventos");

      setEventos(response.data);
    }

    loadEventos();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <ul className="card-holder">
          {eventos.map((evento) => (
            <Card key={evento._id} evento={evento} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
