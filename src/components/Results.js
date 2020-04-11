import React from 'react'
import PropTypes from 'prop-types'
import { questions } from '../constants/questions'


function Results(props) {
    const { selected, handleReset } = props

    const score = selected.reduce((prev, current, index) => {
        if (current === null)
            return 0
        else {
            const currentScore = questions[index].choices.filter(q => q.id === current)
            return prev + currentScore[0].score
        }
    }, 0)
    return (
        <div>
            <div>
                <h2>Your Score Is {score}</h2>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

Results.propTypes = {
    selected: PropTypes.array,
    handleReset: PropTypes.func
}

export default Results

