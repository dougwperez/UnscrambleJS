import React from "react";

const leftPad = (width, n) => {
  if ((n + "").length > width) {
    return n;
  }
  const padding = new Array(width).join("0");
  return (padding + n).slice(-width);
};

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    [
      "update",
      "reset",
      "toggle",
      "resetAndRestart",
      "getTime",
      "toggle2",
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = this.initialState = {
      isRunning: false,
      lapTimes: [],
      timeElapsed: 0,
    };
  }

  componentDidMount() {}

  toggle() {
    this.setState({ isRunning: !this.state.isRunning }, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer);
      this.props.passCompletionTime(this.state.timeElapsed);
    });
  }

  toggle2() {
    this.setState({ isRunning: true });
    clearInterval(this.timer);
    this.props.passCompletionTime(this.state.timeElapsed);
  }

  getTime() {
    console.log(
      "GET TIME!!!",
      this.props.passCompletionTime(this.state.timeElapsed)
    );
  }

  // if(this.props.GameOver){
  //     this.toggle();
  //   }

  reset() {
    clearInterval(this.timer);
    this.setState(this.initialState);
  }
  startTimer() {
    this.startTime = Date.now();
    this.setState({ isRunning: false });
    this.timer = setInterval(this.update, 10);
  }

  resetAndRestart() {
    this.reset();
    this.toggle();
  }

  update() {
    const delta = Date.now() - this.startTime;
    this.setState({ timeElapsed: this.state.timeElapsed + delta });
    this.startTime = Date.now();
  }
  render(props) {
    const { isRunning, lapTimes, timeElapsed } = this.state;

    return (
      <div>
        {/* <button onClick={this.resetAndRestart}>resetAndRestart</button>
        <button onClick={this.toggle2}>toggle2</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.getTime}>getTime</button> */}
        <TimeElapsed id="timer" timeElapsed={timeElapsed} />
      </div>
    );
  }
}

class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2),
    };
  }
  render() {
    const units = this.getUnits();
    return (
      <div id="ClockContainer">
        <div id={this.props.id}>
          <div className="screen">
            <h1 className="time">
              <span className="tsection">
                <span className="tnum">{leftPad(2, units.min)}:</span>
                <span className="tlabel">min</span>
              </span>
              <span className="tsection">
                <span className="tnum">{leftPad(2, units.sec)}.</span>
                <span className="tlabel">sec</span>
              </span>
              <span className="tsection">
                <span className="tnum">{units.msec}</span>
                <span className="tlabel">msec</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
