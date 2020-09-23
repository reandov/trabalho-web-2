import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

export default (props) => (
  <footer className="footer">
    <div className="container">
      <div className="left-side">
        <h3>
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: 8 + "px" }} />
          Equipe
        </h3>
        <ul>
          <li>
            <a href="https://github.com/evnrodr">Evandro Rodrigues</a>
          </li>
          <li>
            <a href="https://github.com/jordao0707">Jordão Rodrigues</a>
          </li>
          <li>
            <a href="https://github.com/leondavidtb">Leonardo David</a>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <h3>
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: 8 + "px" }} />
          Repositório no GitHub
        </h3>
        <a href="https://github.com/evnrodr/trabalho-web-2">Trabalho Web 2</a>
      </div>
    </div>
  </footer>
);
