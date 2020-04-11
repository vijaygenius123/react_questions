import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'
import Arrows from './components/Arrows'
import { questions } from './constants/questions'
import Results from './components/Results';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selected: [],
      complete: false
    }
  }

  componentDidMount() {
    this.setState({ selected: questions.map(q => null) })
  }

  handleArrowsChange = (e, index) => {
    this.setState({ index })
  }

  handleCompletion = (e) => {
    this.setState({ complete: true })
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
    const { index, selected, complete } = this.state;
    return (
      <div className="App" >
        {
          complete ? (
            <div>
              <Question {...questions[index]}
                preSelected={selected[index]}
                handleSelection={this.handleSelection}
              />
              <Arrows index={index} length={questions.length - 1}
                handleArrowsChange={this.handleArrowsChange}
                handleCompletion={this.handleCompletion} />
            </div>
          )
            :
            (
              <Results />
            )
        }
      </div>
    );
  }
}
export default App;
