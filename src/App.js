import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'
import Arrows from './components/Arrows'
import { questions } from './constants/questions'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  handleArrowsChange = (e, index) => {
    this.setState({ index })
  }
  render() {
    return (
      <div className="App" >
        <Question {...questions[this.state.index]} />
        <Arrows index={this.state.index} length={questions.length - 1}
          handleArrowsChange={this.handleArrowsChange} />
      </div>
    );
  }
}
export default App;
