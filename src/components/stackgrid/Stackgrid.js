import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import "./Stackgrid.css";

class StackIt extends Component {
  render() {
    return (
      <StackGrid columnWidth={275}>
        <div className="FutureIdea" key="key1">
          <img src="https://media.licdn.com/dms/image/C4E03AQHYD23JjKy6NA/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=dXlbEZR8Ppfhs-xsEV3PZaVqLPg1IcRYQ1kT2aor6w8" />
        </div>
        <div key="key2">
          <span>
            Lorem ipsum dolor sit amet, prompta aliquid aliquam sit ea, vero
            sonet ex mel. In vim vitae periculis euripidis, nam tota ceteros
            nostrum et. Qui id novum convenire liberavisse. Mel ea mentitum
            appellantur, vix feugiat dolorem atomorum te. Dolor legimus tibique
            ex mel, saepe labitur sea cu. Quodsi signiferumque pri ad. Ad etiam
            voluptatum nam, augue altera mel id. Sea ei inani simul virtute. At
            pri reque harum, eam autem epicuri ea. Ex tollit debitis eam. His
            graeci oporteat petentium eu, quo dico ullum legendos et, quo at
            purto ignota epicuri.
          </span>
        </div>
        <div key="key3">
          <span>
            Lorem ipsum dolor sit amet, prompta aliquid aliquam sit ea, vero
            sonet ex mel. In vim vitae periculis euripidis, nam tota ceteros
            nostrum et. Qui id novum convenire liberavisse. Mel ea mentitum
          </span>
        </div>
      </StackGrid>
    );
  }
}

export default StackIt;
