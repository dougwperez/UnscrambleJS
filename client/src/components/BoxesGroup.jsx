import React from "react";
import Box from "./Box.jsx";
import VictoryModal from "./VictoryModal.jsx";

class BoxesGroup extends React.Component {
  constructor(props) {
    super(props);
    // console.log("test within constructor", this.props.post.Answer);
    let ansString = this.props.post.Answer.split(" ");
    // console.log("ansString", ansString);
    this.setState({ test: ansString });
    this.state = {
      boxes: [],
      AnsString: "",
      VictoryModal: false,
    };
    this.fyShuffle = this.fyShuffle.bind(this);
    this.victoryOutput = this.victoryOutput.bind(this);
  }

  componentDidMount() {
    // console.log("this.props.post.Answer", this.props.post);
    let ansString = this.props.post.Answer.split(" ");
    // console.log("ansString", ansString);
  }

  componentDidUpdate() {
    console.log("this.props.post within didupdate", this.props.post.Answer);

    let ansString = this.props.post.Answer.split("  ");
    // console.log("ansString", ansString);
    var newArr = [];
    for (var i = 0; i < ansString.length; i++) {
      // console.log("I", i);
      newArr.push({ id: i, name: ansString[i], color: "red" });
    }
    // console.log(newArr);
    var testing = this.fyShuffle(newArr);
    // console.log("newArr", newArr);
    if (this.state.boxes.length === 0) {
      this.setState({ boxes: newArr });
      this.setState({ AnsString: this.props.post.Answer });
    }

    var trackerString = "";

    this.state.boxes.forEach((box) => {
      console.log("name", box.name);
      return (trackerString += box.name + "  ");
    });

    //AUDIO FILES
    const pieceAudio = document.getElementsByClassName("element2")[0];
    pieceAudio.volume = 0.5;
    pieceAudio.play();
    var ts = trackerString.slice(0, -2);
    console.log("TS", ts, ts.length);
    console.log(
      "COMPARE FOR VICTORY CONDITION:",
      this.props.post.Answer,
      this.state.AnsString.length,
      this.props.post.Answer
    );

    if (this.props.post.Answer === ts && this.state.VictoryModal === false) {
      console.log("Win?", ts, this.state.AnsString);
      this.setState({ VictoryModal: true });

      this.victoryOutput();

      // alert("WINNING");
      var executed = false;
      return (props) => {
        if (!executed) {
          executed = true;
          // this.props.showModal();
        }
      };
    }
  }

  victoryOutput() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  fyShuffle(arr) {
    var currentI = arr.length,
      tempValue,
      randomI;

    // While there remain elements to shuffle...
    while (0 !== currentI) {
      // Pick a remaining element...
      randomI = Math.floor(Math.random() * currentI);
      currentI -= 1;

      // And swap it with the current element.
      tempValue = arr[currentI];
      arr[currentI] = arr[randomI];
      arr[randomI] = tempValue;
    }

    return arr;
  }

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
  handleDragStart = (data) => (event) => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
    // console.log("this.props.post within body", this.props.post);
    this.setState({ test: "wprd" });
    // console.log("this.setState", this.state);
  };

  /* The dragover event is fired when an element or text selection is being dragged */
  /* over a valid drop target (every few hundred milliseconds) */
  /* The event is fired on the drop target(s) */
  handleDragOver = (data) => (event) => {
    event.preventDefault(); // Necessary. Allows us to drop.
    return false;
  };

  /* Fired when an element or text selection is dropped on a valid drop target */
  /* The event is fired on the drop target(s) */
  handleDrop = (data) => (event) => {
    event.preventDefault();

    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };

    this.swapBoxes(fromBox, toBox);
    return false;
  };

  makeBoxes = (answers) => {
    // console.log("Answers", answers);
    var Ans = answers.split(" ");
    // console.log("Ans", Ans);

    return this.state.boxes.map((box) => (
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
    // console.log("this.props.post within render", this.props.post);
    return (
      <div>
        {this.state.VictoryModal ? <VictoryModal /> : null}
        <div className="boxesGroup">
          {this.makeBoxes(this.props.post.Answer)}
          <audio className="audio-element">
            <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
          </audio>
          <audio className="element2">
            <source src="piece-placement.mp3"></source>
          </audio>
        </div>
      </div>
    );
  }
}

export default BoxesGroup;
