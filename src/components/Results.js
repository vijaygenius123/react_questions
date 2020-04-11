import React from 'react'
import PropTypes from 'prop-types'
import { questions } from '../constants/questions'


function Results(props) {
    const { selected } = props

    const score = selected.reduce((prev, current) => {
        if (current == null)
            return 0
        else
            return prev + current
    }, 0)
    return (
        <div>
            <h2>Your Score Is {score}</h2>
        </div>
    )
}

Results.propTypes = {
    score: PropTypes.number
}

export default Results

