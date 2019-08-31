import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import "./Bio.css";

class Biometric extends Component {
  render() {
    return (
      <StackGrid className="NewIdea" columnWidth={245}>
        <div key="key1">
          <h3 style={{ textAlign: "center" }}>Education</h3>
          <p>
            Attending a six month accelerated part time program held at The
            University of Texas at Austin. Here is a list of skills in which I
            have gained experience: JavaScript, HTML5, CSS, jQuery, Responsive
            Design, Bootstrap, React.js, MongoDB, PHP/Laravel, MySQL,
            Git/Github, Heroku, Security and Session Storage, Google FireBase,
            Node.js/Express, User Authentication, and much more.
          </p>
        </div>
        <div key="key2">
          <h3 style={{ textAlign: "center" }}>Projects</h3>
        </div>
        <div key="key3">
          <h3 style={{ textAlign: "center" }}>Work History</h3>
          <h4 style={{ textAlign: "center" }}>
            Warehouse Receiving Manager (April 2018 - Present)
          </h4>
          <p>
            Employed full time and assists with operations of everything quality
            control and hospitality. The Clients satisfaction is Paramount. Lead
            in ordering Merchandise for resale, such as material for
            Micromarkets and vending Machines. Responsibilities include aligning
            the day to day Receiving Department schedule with consideration of
            the typical workflow. Operating heavy machinery in a closed
            enviroment. In charge of Coordinating and Organizing where the
            location of received merchandise would best reside. Iventory
            control, adjusting Inventory with MEI Software.
          </p>
        </div>
        <div key="key4">
          <h3 style={{ textAlign: "center" }}>Volunteer Work</h3>
        </div>
      </StackGrid>
    );
  }
}

export default Biometric;
