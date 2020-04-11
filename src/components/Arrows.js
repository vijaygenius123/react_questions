import React from 'react'
import PropTypes from 'prop-types'

function Arrows(props) {
    const { index, length, handleArrowsChange, handleCompletion } = props;
    return (
        <div className='arrow-wrapper'>
            {index === 0 ? <div> </div> :
                <div>
                    <h1 onClick={(e) => handleArrowsChange(e, index - 1)}> &lt; </h1>
                </div>
            }

            {index === length ?
                (<div onClick={handleCompletion}><h2>Complete</h2></div>)
                :
                (<div><h2>{index + 1}/{length + 1}</h2></div>)
            }
            {index === length ? <div> </div> :
                <div>
                    <h1 onClick={(e) => handleArrowsChange(e, index + 1)}> &gt; </h1>
                </div>
            }
        </div >
    )
}

Arrows.propTypes = {
    index: PropTypes.number,
    length: PropTypes.number,
    handleArrowsChange: PropTypes.func,
    handleCompletion: PropTypes.func
}

export default Arrows

