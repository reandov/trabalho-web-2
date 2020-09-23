import React from "react";
import Logo from "../components/Logo/Logo";
import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>
);
