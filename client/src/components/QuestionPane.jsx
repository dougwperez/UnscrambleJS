import React from 'react';

const QuestionPane = (props) => {
  console.log("!!", props.currentQ.Question)
  return (
    <div>
      <h2>Question</h2>
      <div>{props.currentQ.Question}</div>
    </div>
  )
}

export default QuestionPane;