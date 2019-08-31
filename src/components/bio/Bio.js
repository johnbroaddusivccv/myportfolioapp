import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import "./Bio.css";

class Biometric extends Component {
  render() {
    return (
      <StackGrid className="NewIdea" columnWidth={245}>
        <div key="key1">
          <h3>Education</h3>
          <p style={{ border: "1px solid rgb(0, 0, 0)" }}>
            Attending a six month accelerated part time program held at The
            University of Texas at Austin. Here is a list of skills in which I
            have gained experience: JavaScript, HTML5, CSS, jQuery, Responsive
            Design, Bootstrap, React.js, MongoDB, PHP/Laravel, MySQL,
            Git/Github, Heroku, Security and Session Storage, Google FireBase,
            Node.js/Express, User Authentication, and much more.
          </p>
        </div>
        <div key="key2">
          <h3>Projects</h3>
        </div>
        <div key="key3">
          <h3>Work History</h3>
        </div>
        <div key="key4">
          <h3>Volunteer Work</h3>
        </div>
      </StackGrid>
    );
  }
}

export default Biometric;