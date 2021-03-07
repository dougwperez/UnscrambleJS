import React from "react";
import axios from "axios";

class MenuMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="modal-container">
        <link
          href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <ul>
          <li onClick={this.props.getEasyQuestion}>
            <a href="#">
              <i class="fa fa-thermometer-empty" aria-hidden="true">
                Beginner
              </i>
            </a>
          </li>
          <li onClick={this.props.getMediumQuestion}>
            <a href="#">
              <i class="fa fa-thermometer-half" aria-hidden="true">
                Intermediate
              </i>
            </a>
          </li>
          <li onClick={this.props.getHardQuestion}>
            <a href="#">
              <i class="fa fa-thermometer-full" aria-hidden="true">
                Advanced
              </i>
            </a>
          </li>
          <li onClick={this.props.getContribution}>
            <a href="#">
              <i class="fa fa-plus" aria-hidden="true">
                Contribute
              </i>
            </a>
          </li>
          <li className="external">
            <a href="https://github.com/dougwperez/UnscrambleJS">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="external">
            <a href="https://www.linkedin.com/in/doug-perez/">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <h1 className="Main-title">
          <span className="Left-title">JS</span>{" "}
          <span className="right-title">UNSCRAMBLE</span>
        </h1>
      </div>
    );
  }
}

export default MenuMode;
