import React from 'react';

const Unsolved = (props) => {
  console.log("!!", props.currentQ.Question)
  return (
    <div>
      <h2>Contribute by solving this problem:</h2>
      <div> {props.currentQ.Question}</div>
    </div>
  )
}

export default Unsolved;