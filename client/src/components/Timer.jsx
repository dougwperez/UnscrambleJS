import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      sec: 0,
      min: 0,
      hr: 0,
      runTimer: "stopped",
      accInterval: "",
    };
  }

  startTimer = () => {
    const { time, runTimer, accInterval } = this.state;
    if (runTimer == "stopped") {
      this.beginTimer();
      this.setState({
        runTimer: "running",
      });
    }
    if (runTimer == "running") {
      accInterval && accInterval.cancel();
      this.setState({
        runTimer: "stopped",
      });
    }
  };

  beginTimer = () => {
    const { time } = this.state;
    const startTime = Date.now() - time;
    this.setState({
      accInterval: accurateInterval(() => {
        this.runTick(startTime);
      }),
    });
  };

  runTick = (startTime) => {
    const { time, sec, min, hr } = this.state;
    const now = new Date(time);
    this.setState({
      time: Date.now() - startTime,
      sec: now.getSeconds(),
      min: now.getMinutes(),
      hr: now.getHours(),
    });
  };

  resetTimer = () => {
    const { accInterval } = this.state;
    this.setState({
      time: 0,
      sec: 0,
      min: 0,
      hr: 0,
      runTimer: "stopped",
      accInterval: "",
    });
    accInterval && accInterval.cancel();
  };

  componentWillUnmount = () => {
    accInterval && accInterval.cancel();
  };

  render() {
    const { time, sec, min, hr, runTimer } = this.state;
    const leftPad = (val) => {
      if (val < 10) {
        return `0${val}`;
      }
      return `${val}`;
    };
    const millify = (val) => {
      if (val >= 0 && val <= 10) {
        return `00${val}`;
      } else if (val <= 100 && val >= 10) {
        return `0${val}`;
      }
      return `${val}`;
    };

    return (
      <div id="ClockContainer">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="screen">
          <h1 className="time">
            <span className="tsection">
              <span className="tnum">{leftPad(min)}</span>
              <span className="tlabel">min</span>
            </span>
            <span className="tsection">
              <span className="tnum">{leftPad(sec)}</span>
              <span className="tlabel">sec</span>
            </span>
            <span className="tsection">
              <span className="tnum">{millify(time % 1000)}</span>
              <span className="tlabel">msec</span>
            </span>
          </h1>
        </div>
        <div class="controls">
          <button id="start_stop" onClick={this.startTimer} className="btn">
            {runTimer == "stopped" ? (
              <i class="fas fa-play"></i>
            ) : (
              <i class="fas fa-stop"></i>
            )}
          </button>
          <button id="reset" onClick={this.resetTimer} className="btn">
            <i class="fas fa-redo-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
