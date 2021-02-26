import React from "react";
import ContributeFab from "./ContributeFab.jsx";

const Unsolved = (props) => {
  console.log("!!", props.currentQ.Question);
  return (
    <div>
      <h1>Contribute by solving this problem:</h1>
      <br />
      <h2>{props.currentQ.Title}</h2>
      <ContributeFab getContribution={props.getContribution} />
      <p className="q-desc"> {props.currentQ.Question}</p>
      <h2>Example</h2>
      <p className="example"> {props.currentQ.Example}</p>
      <br />
    </div>
  );
};

export default Unsolved;
