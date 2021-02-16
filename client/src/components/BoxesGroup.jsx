import React from 'react';
import Box from './Box.jsx'

class BoxesGroup extends React.Component {
  constructor(props) {
    super(props);
    console.log("test within constructor", this.props.post.Answer)
    this.state = {
      boxes: [
        { id: 1, name: "BOX1Test", color: "red" },
        { id: 2, name: "BOX2", color: "green" },
        { id: 3, name: "BOX3", color: "blue" },
        { id: 4, name: "BOX4", color: "orange" },
        { id: 5, name: "BOX5", color: "pink" },
        { id: 6, name: "BOX6", color: "yellow" }
      ],
      test: ''
    };
  }
  // state = {
  //   boxes: [
  //     { id: 1, name: this.props.post.Answer, color: "red" },
  //     { id: 2, name: "BOX2", color: "green" },
  //     { id: 3, name: "BOX3", color: "blue" },
  //     { id: 4, name: "BOX4", color: "orange" },
  //     { id: 5, name: "BOX5", color: "pink" },
  //     { id: 6, name: "BOX6", color: "yellow" }
  //   ]
  // }

  // componentDidMount() {
  //   console.log("this.props.post.Answer", this.props.post)
  //   let ansString = this.props.post.Answer.split(" ")
  //   console.log("ansString", ansString)
  // }

  // componentDidUpdate() {
  //   console.log("this.props.post within didupdate", this.props.post.Answer)
  // let ansString = this.props.post.Answer.split(" ")
  // console.log("ansString", ansString)
  //   if (this.state.boxes.length === 0) {
  //     this.setState({ boxes: [{ id: 1, name: this.props.post.Answer, color: "Red" }] })
  //   };
  // }


  swapBoxes = (fromBox, toBox) => {
    let boxes = this.state.boxes.slice();
    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].id === fromBox.id) {
        fromIndex = i;
      }
      if (boxes[i].id === toBox.id) {
        toIndex = i;
      }
    }

    if (fromIndex != -1 && toIndex != -1) {
      let { fromId, ...fromRest } = boxes[fromIndex];
      let { toId, ...toRest } = boxes[toIndex];
      boxes[fromIndex] = { id: fromBox.id, ...toRest };
      boxes[toIndex] = { id: toBox.id, ...fromRest };

      this.setState({ boxes: boxes });
    }
  };

  /* The dragstart event is fired when the user starts dragging an element or text selection */
  /* event.target is the source element : that is dragged */
  /* Firefox requires calling dataTransfer.setData for the drag to properly work */
  handleDragStart = data => event => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
    console.log("this.props.post within body", this.props.post)
  };

  /* The dragover event is fired when an element or text selection is being dragged */
  /* over a valid drop target (every few hundred milliseconds) */
  /* The event is fired on the drop target(s) */
  handleDragOver = data => event => {
    event.preventDefault(); // Necessary. Allows us to drop.
    return false;
  };

  /* Fired when an element or text selection is dropped on a valid drop target */
  /* The event is fired on the drop target(s) */
  handleDrop = data => event => {
    event.preventDefault();

    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };

    this.swapBoxes(fromBox, toBox);
    return false;
  };

  makeBoxes = (answers) => {
    // console.log("Answers", answers)
    // var Ans = answers.split(" ")
    // console.log("Ans", Ans)
    // for (var i = 0; i < Ans.length; i++) {
    //   console.log("Ans[i]", Ans[i])
    //   var added = Ans[i]
    //   // this.setState(prevState => ({
    //   //   boxes: [...prevState.myArray, { "name": "object" }]
    //   // }))
    // }

    // // this.setState(prevState => ({
    // //   boxes: [...prevState.myArray, { "name": "object" }]
    // // }))
    // // // this.setState({})
    // this.setState({ test: "FUCK" })

    return this.state.boxes.map(box => (
      <Box
        box={box}
        key={box.id}
        draggable="true"
        onDragStart={this.handleDragStart}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      />
    ));
  };

  render() {
    console.log("this.props.post within render", this.props.post)
    return <div className="boxesGroup">{this.makeBoxes()}</div>;
  }
}

export default BoxesGroup;