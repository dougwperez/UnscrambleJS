import React from 'react';
import axios from 'axios';
import MenuMode from './MenuMode.jsx';
import ContributeMode from './ContributeMode.jsx';
import GameMode from './GameMode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: {
        _id: '',
        Category: '',
        Question: '',
        Answer: '',
        Flag: Boolean,
        Score: Number
      },
      View: "MenuMode",
    }
    //Modes
    this.StartGameMode = this.StartGameMode.bind(this);
    this.StartContributeMode = this.StartContributeMode.bind(this);
    //Difficulty Levels
    this.getEasyQuestion = this.getEasyQuestion.bind(this);
    this.getMediumQuestion = this.getMediumQuestion.bind(this);
    this.getHardQuestion = this.getHardQuestion.bind(this);
    //Contributions
    this.postContribution = this.postContribution.bind(this);
    this.getContribution = this.getContribution.bind(this);
  }

  StartGameMode() {
    this.setState({ View: "GameMode" })
  }
  StartContributeMode() {
    this.setState({ View: "ContributeMode" })
  }

  getEasyQuestion() {
    this.StartGameMode()
    axios.get('/api/easy/')
      .then(response => {
        console.log("getEasyQuestion response.data", response.data[0])
        this.setState({ currentQ: response.data[0] })
      })
      .catch(error => console.log(error))
  }
  getMediumQuestion() {
    this.StartGameMode()
    axios.get('/api/medium/')
      .then(response => {
        console.log("getMediumQuestion response.data", response.data[0])
        this.setState({ currentQ: response.data[0] })
      })
      .catch(error => console.log(error))
  }
  getHardQuestion() {
    this.StartGameMode()
    axios.get('/api/hard/')
      .then(response => {
        console.log("getHardQuestion response.data", response.data[0])
        this.setState({ currentQ: response.data[0] })
      })
      .catch(error => console.log(error))
  }

  //Contributions
  postContribution() {
    this.StartContributeMode()
    axios.get('/api/contribute/')
      .then(response => {
        console.log("get contribute questions response.data", response.data)
        this.setState({ currentQ: response.data })
      })
      .catch(error => console.log(error))
  }
  getContribution() {
    this.StartContributeMode()
    axios.get('/api/contribute/')
      .then(response => {
        console.log("get contribute questions response.data", response.data)
        this.setState({ currentQ: response.data[0] })
      })
      .catch(error => console.log(error))
  }





  render() {
    // return (
    // this.state.View === "Modal" ? <ModalMenu
    //   getEasyQuestion={this.getEasyQuestion}
    //   getMediumQuestion={this.getMediumQuestion}
    //   getHardQuestion={this.getHardQuestion}
    //   postContribution={this.postContribution}
    // /> :
    //   <div>
    //     Hello from App
    // </div>
    if (this.state.View === "MenuMode") {
      return (
        <div>



          <MenuMode
            getEasyQuestion={this.getEasyQuestion}
            getMediumQuestion={this.getMediumQuestion}
            getHardQuestion={this.getHardQuestion}
            getContribution={this.getContribution}
          />
        </div>
      )
    }
    if (this.state.View === "GameMode") {
      return (
        <GameMode currentQ={this.state.currentQ} />
      )
    }
    if (this.state.View === "ContributeMode") {
      return (
        <ContributeMode currentQ={this.state.currentQ} />
      )
    }


  }
  // }
}

export default App;