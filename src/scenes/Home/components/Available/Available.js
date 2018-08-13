import React from 'react'
import './Available.css'

const message  = 'Wolne!'
const invitation = 'Zapraszamy'

const Available = props => {  
    return (
        <div className={`available ${props.cssClass}`} onClick={props.onClick}>
            <div className='available__title'> {message} </div>
            <div className='available__content'> {invitation} </div>
        </div>
    )
}

export default Available