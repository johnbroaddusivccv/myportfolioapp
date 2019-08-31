import React from "react";
import "./App.css";
import StackIt from "./components/stackgrid/Stackgrid";
import Biometric from "./components/bio/Bio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMailBulk,
  faStroopwafel,
  faFileArchive,
  faCat
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <FontAwesomeIcon
              style={{ height: "40", width: "40" }}
              icon={faMailBulk}
            />
          </li>
          <li>
            <FontAwesomeIcon
              style={{ height: "40", width: "40" }}
              icon={faLink}
            />
          </li>
          <li>
            <FontAwesomeIcon
              style={{ height: "40", width: "40" }}
              icon={faStroopwafel}
            />
          </li>
          <li>
            <FontAwesomeIcon
              style={{ height: "40", width: "40" }}
              icon={faFileArchive}
            />
          </li>
          <li>
            <FontAwesomeIcon
              style={{ height: "40", width: "40" }}
              icon={faCat}
            />
          </li>
        </ul>
      </header>
      <div className="AboutMe">
        <StackIt />
      </div>
      <div>
        <Biometric />
      </div>
    </div>
  );
}

export default App;
