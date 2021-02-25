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
    };
    this.showModal = this.showModal.bind(this);
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
            <Stopwatch />
          </div>
          <h2 className="answer-title">JS Unscramble</h2>
          <div className="fabs">
            <FloatingActionButtons
              getHardQuestion={this.props.getHardQuestion}
              currentQ={this.props.currentQ}
            />
          </div>
        </div>
        {/* <div>{this.props.currentQ.Answer}</div> */}
        <BoxesGroup post={this.props.currentQ} showModal={this.showModal} />
      </div>
    );
  }
}

export default AnswerPane;
