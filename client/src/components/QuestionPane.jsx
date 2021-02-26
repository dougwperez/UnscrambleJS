import React from "react";
import QFab from "./QFab.jsx";

const QuestionPane = (props) => {
  console.log("!!", props.currentQ.Question);
  return (
    <div>
      <h2>{props.currentQ.Title}</h2>
      <QFab
        getHardQuestion={props.getHardQuestion}
        currentQ={props.currentQ}
        updateScore={props.updateScore}
      />
      <p className="q-desc">{props.currentQ.Question}</p>
      <br />
      <h2>Example</h2>
      <p className="example">{props.currentQ.Example}</p>
    </div>
  );
};

export default QuestionPane;
