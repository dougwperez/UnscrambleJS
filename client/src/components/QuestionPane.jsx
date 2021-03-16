import React from "react";
import QFab from "./QFab.jsx";

const QuestionPane = (props) => {
  console.log("!!", props.currentQ.Question);
  return (
    <div>
      <h2>{props.currentQ.Title}</h2>
      <QFab
        difficulty={props.difficulty}
        getEasyQuestion={props.getEasyQuestion}
        getMediumQuestion={props.getMediumQuestion}
        getHardQuestion={props.getHardQuestion}
        currentQ={props.currentQ}
        updateScore={props.updateScore}
      />
      <span>
        <h3>Difficulty: {props.difficulty}</h3>
        <h3>Category: {props.currentQ.Category}</h3>
      </span>
      <p className="q-desc">{props.currentQ.Question}</p>
      <br />
      <h2>Example</h2>
      <p className="example">{props.currentQ.Example}</p>
    </div>
  );
};

export default QuestionPane;
