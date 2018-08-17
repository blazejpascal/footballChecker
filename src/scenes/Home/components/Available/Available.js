import React from 'react'
import './Available.less'

const message  = 'Wolne!'

const Available = props => {
    return (
        <div className={`available ${props.cssClass} `}>
                <div className='available__title'> {message} </div>
        </div>
    )
}

export default Available