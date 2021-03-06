import React from "react";
import axios from "axios";
import MenuMode from "./MenuMode.jsx";
import ContributeMode from "./ContributeMode.jsx";
import GameMode from "./GameMode.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: {
        _id: "",
        Category: "",
        Question: "",
        Answer: "",
        Flag: Boolean,
        Score: Number,
      },
      View: "MenuMode",
      difficulty: "",
    };
    //Modes
    this.StartGameMode = this.StartGameMode.bind(this);
    this.StartContributeMode = this.StartContributeMode.bind(this);
    //Difficulty Levels
    this.getEasyQuestion = this.getEasyQuestion.bind(this);
    this.getMediumQuestion = this.getMediumQuestion.bind(this);
    this.getHardQuestion = this.getHardQuestion.bind(this);
    this.updateScore = this.updateScore.bind(this);
    //Contributions
    this.postContribution = this.postContribution.bind(this);
    this.getContribution = this.getContribution.bind(this);
  }

  StartGameMode() {
    this.setState({ View: "GameMode" });
  }
  StartContributeMode() {
    this.setState({ View: "ContributeMode" });
  }

  getEasyQuestion() {
    this.StartGameMode();
    this.setState({ difficulty: "Beginner" });
    axios
      .get("/api/easy/")
      .then((response) => {
        console.log("getEasyQuestion response.data", response.data[0]);
        this.setState({ currentQ: response.data[0] });
      })
      .catch((error) => console.log(error));
  }
  getMediumQuestion() {
    this.StartGameMode();
    this.setState({ difficulty: "Intermediate" });
    axios
      .get("/api/medium/")
      .then((response) => {
        console.log("getMediumQuestion response.data", response.data[0]);
        this.setState({ currentQ: response.data[0] });
      })
      .catch((error) => console.log(error));
  }
  getHardQuestion() {
    this.StartGameMode();
    this.setState({ difficulty: "Advanced" });
    axios
      .get("/api/hard/")
      .then((response) => {
        console.log("getHardQuestion response.data", response.data[0]);
        this.setState({ currentQ: response.data[0] });
      })
      .catch((error) => console.log(error));
  }

  updateScore(difficulty, id, scoreData) {
    console.log("difficulty in App", difficulty);
    console.log("id in App", id);
    console.log("score", scoreData);
    // this.setState({ currentQ.Score: 5});
    const scoreObj = { Score: scoreData };
    console.log(scoreObj);
    axios
      .patch(`/api/${difficulty}/${id}`, scoreObj)
      .then((response) => {
        console.log(response);
        this.getEasyQuestion;
        // this.setState({ currentQ.Score: response.Score});
        // this.getMovies()
      })
      .catch((error) => console.log(error));
  }

  //Contributions
  postContribution() {
    this.StartContributeMode();
    axios
      .get("/api/contribute/")
      .then((response) => {
        console.log("get contribute questions response.data", response.data);
        this.setState({ currentQ: response.data });
      })
      .catch((error) => console.log(error));
  }
  getContribution() {
    this.StartContributeMode();
    axios
      .get("/api/contribute/")
      .then((response) => {
        console.log("get contribute questions response.data", response.data);
        this.setState({ currentQ: response.data[0] });
      })
      .catch((error) => console.log(error));
  }

  render() {
    if (this.state.View === "MenuMode") {
      return (
        <div>
          <MenuMode
            getEasyQuestion={this.getEasyQuestion}
            getMediumQuestion={this.getMediumQuestion}
            getHardQuestion={this.getHardQuestion}
            getContribution={this.getContribution}
            updateScore={this.updateScore}
          />
        </div>
      );
    }
    if (this.state.View === "GameMode") {
      return (
        <GameMode
          currentQ={this.state.currentQ}
          difficulty={this.state.difficulty}
          getEasyQuestion={this.getEasyQuestion}
          getMediumQuestion={this.getMediumQuestion}
          getHardQuestion={this.getHardQuestion}
          updateScore={this.updateScore}
        />
      );
    }
    if (this.state.View === "ContributeMode") {
      return (
        <ContributeMode
          currentQ={this.state.currentQ}
          getContribution={this.getContribution}
        />
      );
    }
  }
}

export default App;
