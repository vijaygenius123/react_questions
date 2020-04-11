import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Question(props) {
    const [selected, setSelected] = useState(null)
    const { title, choices, image, preSelected, handleSelection } = props;

    useEffect(() => {
        setSelected(preSelected)
    }, [preSelected])

    return (
        <div>
            <div className='question'>
                <h1>{title}</h1>
            </div>
            <div className='answer'>
                <div className='image'>
                    <img src={`${image}`} alt={image} />
                </div>
                <div className='choices'>
                    <form>
                        {choices.map(choice => {
                            return (
                                <div key={choice.id} className='choice'>
                                    <input type='radio'
                                        onChange={() => handleSelection(choice.id)}
                                        id={choice.id}
                                        name={choice.answer}
                                        value={choice.id}
                                        checked={selected === choice.id}
                                    />
                                    <label htmlFor={choice.answer}> {choice.answer}</label>
                                </div>
                            )
                        })}
                    </form>
                </div>
            </div>
        </div >
    )
}

Question.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    choices: PropTypes.array,
    handleSelection: PropTypes.func,
    preSelected: PropTypes.number
}

export default Question

