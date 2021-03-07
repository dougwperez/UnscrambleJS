import React from "react";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import ContributeModal from "./ContributeModal.jsx";

class Solution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Difficulty: "",
      Category: "",
      Answer: "",
      Flag: true,
      Score: 0,
      Modal: false,
      Hover: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Modal: true });
  }

  render() {
    return (
      <div>
        {this.state.Modal ? <ContributeModal /> : null}
        <header className="contribution-header">
          <div></div>
          <h1>Solution Form</h1>
          <span
            className="contribution-homeBtn"
            onClick={() => {
              location.reload();
            }}
            onMouseOver={() => this.setState({ Hover: "Main Menu" })}
            onMouseOut={() => this.setState({ Hover: "" })}
          >
            <Fab color="primary" aria-label="add">
              {this.state.Hover === "Main Menu" ? "Main Menu" : <HomeIcon />}
            </Fab>
          </span>
        </header>

        <h3>Help JS Unscramble grow by providing your own solution!</h3>
        <form onSubmit={this.handleSubmit}>
          <br />

          <label className="form-label">
            <span className="form-name-label">Difficulty:</span>
            <select
              name="Difficulty"
              className="options"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
          <br />
          <br />
          <label className="form-label">
            <span className="form-name-label">Category:</span>
            <select
              name="Category"
              className="options"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="Algorithims">Algorithims</option>
              <option value="Arrays">Arrays</option>
              <option value="Data-Structures">Data Structures</option>
              <option value="Interview">Interview</option>
              <option value="Numbers">Numbers</option>
              <option value="Objects">Objects</option>
              <option value="Recurssion">Recurssion</option>
              <option value="Regex">Regex</option>
              <option value="Sorting">Sorting</option>
              <option value="Strings">Strings</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            <textarea
              name="Answer"
              className="answer-field"
              placeholder="Copy and Paste your solution code here.."
              type="textarea"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <input className="options" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Solution;
