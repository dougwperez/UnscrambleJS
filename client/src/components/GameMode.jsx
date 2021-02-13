import React from 'react';
import QuestionPane from './QuestionPane.jsx';
import AnswerPane from './AnswerPane.jsx';
import BlockPane from './BlockPane.jsx';

const GameMode = (props) => (
  <div className="game-container">
    <div className="Gamepane question"><QuestionPane currentQ={props.currentQ} /></div>
    <div className="Gamepane blocks"><AnswerPane /></div>
    <div className="Gamepane answer"><BlockPane /></div>
  </div>
)

export default GameMode;