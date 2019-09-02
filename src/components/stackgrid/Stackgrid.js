import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import "./Stackgrid.css";

class StackIt extends Component {
  render() {
    return (
      <StackGrid columnWidth={275}>
        <div className="FutureIdea" key="key1">
          <p>
            <img
              className="jmbiv"
              src="https://media.licdn.com/dms/image/C4E03AQHYD23JjKy6NA/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=dXlbEZR8Ppfhs-xsEV3PZaVqLPg1IcRYQ1kT2aor6w8"
            />
          </p>
        </div>
        <div key="key2">
          <p>
            Detail Oriented, Dead-lines are crucial, I work well in teams and
            thrive when working alone. I have a passion for technology and
            digital operations. I am open to collaborations and any freelance
            work. I create websites and applications to learn more about myself.
            Helping People accomplish their dreams is my dream. I am a fountain
            of Ideas and carry my work ethic with me in everything I do. In my
            freetime I produce Ambient Music on FL-Studio, I make Websites and
            Applications aimed at increasing the quality of our lives, and I
            Read and Watch documentaries.
          </p>
        </div>
        <div key="key3">
          <p>
            Lorem ipsum dolor sit amet, prompta aliquid aliquam sit ea, vero
            sonet ex mel. In vim vitae periculis euripidis, nam tota ceteros
            nostrum et. Qui id novum convenire liberavisse. Mel ea mentitum.
          </p>
        </div>
      </StackGrid>
    );
  }
}

export default StackIt;
