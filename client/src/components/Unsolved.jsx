import React from "react";
import ContributeFab from "./ContributeFab.jsx";

const Unsolved = (props) => {
  console.log("!!", props.currentQ.Question);
  return (
    <div>
      <h1>Contribute by solving this problem:</h1>
      <ContributeFab />
      <br />
      <h3>
        Help JS Unscramble grow by providing your own custom solution to this
        unsolved problem!
      </h3>
      <br />
      <h2>Question</h2>
      <p> {props.currentQ.Question}</p>
      <h2>Example</h2>
      <p> {props.currentQ.Example}</p>
    </div>
  );
};

export default Unsolved;
