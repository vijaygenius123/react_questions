import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'
import Arrows from './components/Arrows'
import { questions } from './constants/questions'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selected: []
    }
  }

  componentDidMount() {
    this.setState({ selected: questions.map(q => null) })
  }

  handleArrowsChange = (e, index) => {
    this.setState({ index })
  }

  handleSelection = (selectedChoice) => {
    const newSelections = this.state.selected.map((sel, i) => {
      if (i === this.state.index)
        return selectedChoice
      else return sel
    })
    this.setState({ selected: newSelections })
  }

  render() {
    const { index, selected } = this.state;
    return (
      <div className="App" >
        <Question {...questions[index]}
          preSelected={selected[index]}
          handleSelection={this.handleSelection}
        />
        <Arrows index={index} length={questions.length - 1}
          handleArrowsChange={this.handleArrowsChange} />
      </div>
    );
  }
}
export default App;
