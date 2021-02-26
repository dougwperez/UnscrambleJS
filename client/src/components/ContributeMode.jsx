import React from "react";
import Unsolved from "./Unsolved.jsx";
import Solution from "./Solution.jsx";

const ContributeMode = (props) => (
  <ul className="contribution-container">
    <div className="unsolved contribution-pane">
      <Unsolved
        currentQ={props.currentQ}
        getContribution={props.getContribution}
      />
    </div>
    <div className="solved contribution-pane">
      <Solution currentQ={props.currentQ} />
    </div>
  </ul>
);

export default ContributeMode;
