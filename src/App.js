import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'

import { questions } from './constants/questions'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <div className="App" >
        <Question {...questions[this.state.index]} />
      </div>
    );
  }
}
export default App;
