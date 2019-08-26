import React from "react";
import "./App.css";
import StackIt from "./components/stackgrid/Stackgrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMailBulk,
  faStroopwafel,
  faFileArchive
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <FontAwesomeIcon icon={faMailBulk} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLink} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStroopwafel} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFileArchive} />
          </li>
        </ul>
        <div className="aboutMe">
          <StackIt />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
