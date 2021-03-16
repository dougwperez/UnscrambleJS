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
      timeObj: { minutes: "", seconds: "", milliseconds: "" },
    };
    this.showModal = this.showModal.bind(this);
    this.endGame = this.endGame.bind(this);
    this.swapTimerRefresh = this.swapTimerRefresh.bind(this);
    this.passCompletionTime = this.passCompletionTime.bind(this);
  }

  endGame() {
    console.log("GAME OVER CALLED IN ANSWER PANE");
    this.setState({ GameOver: true });
    this.refs.Stopwatch.toggle();
  }

  swapTimerRefresh() {
    this.refs.Stopwatch.resetAndRestart();
  }

  passCompletionTime(time) {
    console.log("raw time in answerpane", time);
    const seconds = time / 1000;
    const min = Math.floor(seconds / 60).toString();
    const sec = Math.floor(seconds % 60).toString();
    const msec = (seconds % 1).toFixed(3).substring(2);
    if (time > 10) {
      console.log("TIME!!!!!!", min, sec, msec);
      this.setState({ completionTime: time });
      this.setState({
        timeObj: { minutes: min, seconds: sec, milliseconds: msec },
      });
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
          swapTimerRefresh={this.swapTimerRefresh}
          completionTime={this.state.completionTime}
          timeObj={this.state.timeObj}
        />
      </div>
    );
  }
}

export default AnswerPane;
