import React from 'react'
import './Available.less'

const message  = 'Wolne!'
const invitation = 'Zapraszamy'

const Available = props => {  
    return (
        <div className={`available ${props.cssClass}`}>
            <div className='available__title'> {message} </div>
            <div className='available__content'> {invitation} </div>
        </div>
    )
}

export default Available