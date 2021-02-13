import React from 'react';

class BlockPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    // console.log("Test", props.currentQ.Answer)
    return (
      <div>
        <h2>Blocks</h2>
        <div>Scrambled Answer here</div>
      </div>
    )
  }
}

export default BlockPane;