import React from "react";
import "./App.css";
import StackIt from "./components/stackgrid/Stackgrid";
import Biometric from "./components/bio/Bio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMailBulk,
  faFileArchive,
  faCat
} from "@fortawesome/free-solid-svg-icons";
import Project from "./components/projectgallery/Project";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          color: "Black",
          height: "150",
          width: "150",
          textAlign: "center",
          background: "#e4e9ebd7",
          border: "5px solid Black",
          opacity: "0.9",
          margin: "2rem",
          padding: "10px"
        }}
      >
        John Morgan Broaddus IV
      </h1>
      <header className="App-header">
        <ul>
          <li>
            <FontAwesomeIcon
              style={{ height: "30", width: "30" }}
              icon={faMailBulk}
            />
            Email
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://www.linkedin.com/in/john-broaddus-bb869b178/"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ height: "30", width: "30" }}
                icon={faLink}
              />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="jmbiv.pdf"
              download="Resume"
            >
              <FontAwesomeIcon
                style={{ height: "30", width: "30" }}
                icon={faFileArchive}
              />
              Résumé
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="https://github.com/johnbroaddusivccv"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{ height: "30", width: "30" }}
                icon={faCat}
              />
              Github
            </a>
          </li>
        </ul>
      </header>
      <div className="AboutMe">
        <StackIt />
      </div>
      <div>
        <Biometric />
      </div>
      <Project />
    </div>
  );
}

export default App;
