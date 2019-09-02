import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import "./Bio.css";

class Biometric extends Component {
  render() {
    return (
      <StackGrid className="NewIdea" columnWidth={300}>
        <div data-aos="fade-left" key="key1">
          <h3 style={{ textAlign: "center" }}>Education</h3>
          <h4 style={{ textAlign: "center" }}>
            The University of Texas at Austin (February 2019-August 2019)
          </h4>
          <p>
            Participated in a six month accelerated part time program held at
            The University of Texas at Austin. Here is a list of skills in which
            I have sharpened: JavaScript, HTML5, CSS, jQuery, Responsive Design,
            Bootstrap, React, MongoDB, PHP/Laravel, MySQL, Git/Github, Heroku,
            Security and Session Storage, Google FireBase, Node.js/Express, User
            Authentication, and much more.
          </p>
        </div>
        <div data-aos="fade-left" key="key2">
          <h3 style={{ textAlign: "center" }}>Work History</h3>
          <h4 style={{ textAlign: "center" }}>
            Capitol Vending & Coffee Receiving Manager (April 2018-Present)
          </h4>
          <p>
            Employed full time and assists with operations of everything quality
            control and hospitality. The Clients satisfaction is Paramount. Lead
            in ordering Merchandise for resale, such as material for
            Micromarkets and vending Machines. Responsibilities include aligning
            the day to day Receiving Department schedule with consideration of
            the typical workflow. In charge of Coordinating and Organizing where
            the location of received merchandise would best reside. Iventory
            control, adjusting Inventory with MEI Software.
          </p>
        </div>
        <div data-aos="fade-up" key="key3">
          <h3 style={{ textAlign: "center" }}>Volunteer Work</h3>
          <h4 style={{ textAlign: "center" }}>
            Joi Community Outreach/Austin School of Film
          </h4>
          <p>
            Assist in preparing for events that reach out to low-income
            communities in East Austin, we host Dominoe Tournaments and Card
            Games with cash Prizes quarterly. Monthly Service Commitment to give
            freely of my time to the Austin School of Film/JOI Community
            Outreach.
          </p>
        </div>
      </StackGrid>
    );
  }
}

export default Biometric;
