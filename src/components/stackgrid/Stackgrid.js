import React, { Component } from "react";
import StackGrid from "react-stack-grid";

class Stackgrid extends Component {
  render() {
    return (
      <StackGrid columnWidth={150}>
        <div key="key1">
          <img src="https://media.licdn.com/dms/image/C4E03AQHYD23JjKy6NA/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=dXlbEZR8Ppfhs-xsEV3PZaVqLPg1IcRYQ1kT2aor6w8" />
        </div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
    );
  }
}

export default Stackgrid;
