import React from 'react';

const QuestionPane = (props) => {
  console.log("!!", props.currentQ.Question)
  return (
    <div>
      <h2>Question</h2>
      <p>{props.currentQ.Question}</p>
      <h2>Example</h2>
      <p className="example">{props.currentQ.Example}</p>
    </div>
  )
}

export default QuestionPane;