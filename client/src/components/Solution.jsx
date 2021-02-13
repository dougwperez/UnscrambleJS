import React from 'react';

class Solution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Difficulty: '',
      Category: '',
      Answer: '',
      Flag: true,
      Score: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Difficulty ' + this.state.Difficulty);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h2>Solution Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Difficulty:
          <select name="Difficulty" value={this.state.value} onChange={this.handleChange}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <br />
          <label>
            Category:
          <select name="Category" value={this.state.value} onChange={this.handleChange}>
              <option value="Objects">Objects</option>
              <option value="Arrays">Arrays</option>
              <option value="Strings">Strings</option>
            </select>
          </label>
          <br />
          <label>
            <input
              name="Answer"
              className="answer-field"
              placeholder="Enter your solution code here.."
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Solution;