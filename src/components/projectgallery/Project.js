import React, { Component } from "react";
import "./Project.css";

export default class Project extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <h1>
            <span>Project</span>Gallery
          </h1>
        </header>
        <main className="container">
          <section className="card">
            <img
              src="https://picsum.photos/200/300?grayscale"
              alt="Project-1"
            ></img>
            <div>
              <h3>Project name one</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <a href="#" className="btn">
                View Here
              </a>
            </div>
          </section>
          <section className="card" data-aos="fade-left">
            <img
              src="https://picsum.photos/200/300/?blur=2"
              alt="Project-1"
            ></img>
            <div>
              <h3>Project name one</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <a href="#" className="btn">
                View Here
              </a>
            </div>
          </section>
          <section className="card" data-aos="fade-right">
            <img src="https://picsum.photos/200/300" alt="Project-1"></img>
            <div>
              <h3>Project name one</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <a href="#" className="btn">
                View Here
              </a>
            </div>
          </section>
          <section className="card" data-aos="fade-left">
            <img
              src="https://picsum.photos/200/300/?blur"
              alt="Project-1"
            ></img>
            <div>
              <h3>Project name one</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <a href="https://picsum.photos/200/300.jpg" className="btn">
                View Here
              </a>
            </div>
          </section>
          <section className="card" data-aos="fade-right">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="Project-1"
            ></img>
            <div>
              <h3>Project name one</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <a href="#" className="btn">
                View Here
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
