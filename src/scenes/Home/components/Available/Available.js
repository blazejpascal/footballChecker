import React from 'react'
import './Available.css'

const message  = 'Wolne!'
const invitation = 'Zapraszamy'

const Available = () => (
    <div className='available'>
        <div className='available__title'> {message} </div>
        <div className='available__content'> {invitation} </div>
    </div>
)

export default Available