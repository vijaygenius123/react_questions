import React from 'react'
import PropTypes from 'prop-types'

function Question(props) {
    const { title, choices, image } = props;
    return (
        <div>
            <div className='question'>
                <h1>{title}</h1>
            </div>
            <div className='answer'>
                <div className='image'>
                    <img src={`${image}`} />
                </div>
                <div className='choices'>
                    {choices.map(choice => {
                        return (
                            <div key={choice.id} className='choice'>
                                <label>
                                    <input type='radio'></input>
                                    {choice.answer}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

Question.propTypes = {

}

export default Question

