import React from 'react'
import PropTypes from 'prop-types'

function Arrows(props) {
    const { index, length, handleArrowsChange } = props;
    return (
        <div className='arrow-wrapper'>
            {index == 0 ? <div> </div> :
                <div>
                    <h1 onClick={(e) => handleArrowsChange(e, index - 1)}> &lt; </h1>
                </div>
            }
            <h2>{index}/{length}</h2>
            {index == length ? <div> </div> :
                <div>
                    <h1 onClick={(e) => handleArrowsChange(e, index + 1)}> &gt; </h1>
                </div>
            }
        </div >
    )
}

Arrows.propTypes = {

}

export default Arrows
