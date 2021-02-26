import React from "react";
import BoxesGroup from "./BoxesGroup.jsx";
import Box from "./Box.jsx";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import FloatingActionButtons from "./FloatingActionButtons.jsx";
import VictoryModal from "./VictoryModal.jsx";
import Stopwatch from "./Stopwatch.jsx";

class AnswerPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      View: "Game",
      GameOver: false,
      completionTime: "",
    };
    this.showModal = this.showModal.bind(this);
    this.endGame = this.endGame.bind(this);
    this.passCompletionTime = this.passCompletionTime.bind(this);
  }

  endGame() {
    console.log("GAME OVER CALLED IN ANSWER PANE");
    this.setState({ GameOver: true });
    this.refs.Stopwatch.toggle();
  }

  passCompletionTime(time) {
    console.log("Whats wrong?", time);
    if (time > 10) {
      this.setState({ completionTime: time });
    }
  }

  showModal() {
    this.setState({ View: "Modal" });
  }

  render(props) {
    // console.log('PROPS', this.props.currentQ.Answer)
    return (
      <div>
        {this.state.View === "Modal" ? <VictoryModal /> : null}
        <div className="answer-header">
          <div className="fabs">
            <Stopwatch
              ref="Stopwatch"
              passCompletionTime={this.passCompletionTime}
            />
            {/* GameOver={this.state.GameOver} */}
          </div>
          <h2 className="answer-title">
            <span className="Left-answer-title">JS</span>{" "}
            <span className="Right-answer-title">UNSCRAMBLE</span>
          </h2>
          <div className="fabs">
            <FloatingActionButtons
              getHardQuestion={this.props.getHardQuestion}
              currentQ={this.props.currentQ}
            />
          </div>
        </div>
        {/* <div>{this.props.currentQ.Answer}</div> */}
        <BoxesGroup
          post={this.props.currentQ}
          showModal={this.showModal}
          endGame={this.endGame}
          completionTime={this.state.completionTime}
        />
      </div>
    );
  }
}

export default AnswerPane;
