import React from "react";
import QuestionPane from "./QuestionPane.jsx";
import AnswerPane from "./AnswerPane.jsx";

const GameMode = (props) => (
  <div className="game-container">
    <div className="Gamepane question">
      <QuestionPane
        currentQ={props.currentQ}
        updateScore={props.updateScore}
        getHardQuestion={props.getHardQuestion}
      />
    </div>
    <div className="Gamepane blocks">
      <AnswerPane
        currentQ={props.currentQ}
        //OLD SET UP FOR GETTING RANDOM QUESTIOIN
        // getHardQuestion={props.getHardQuestion}
      />
    </div>
  </div>
);

export default GameMode;
