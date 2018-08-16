import React from 'react'
import './Available.less'

const message  = 'Wolne!'
const invitation = 'Zapraszamy'

const Available = props => {
    return (
        <div className={`available ${props.cssClass} `}>
            <div className='available__bg'>
                <div className='available__title'> {message} </div>
                <dv className='available__content'> {invitation} </dv>
            </div>
        </div>
    )
}

export default Available