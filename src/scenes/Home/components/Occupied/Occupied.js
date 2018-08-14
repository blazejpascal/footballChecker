import React from 'react'
import './Occupied.css'
import CounterWithMutation from './components/CounterWithMutation/CounterWithMutation'

const message  = 'Zajęte'

const Occupied = props => (
    <div className={`occupied  ${props.cssClass}`} onClick={props.onClick}>
        <div className='occupied__title'> {message} </div>
        <CounterWithMutation date={props.date}/>

    </div>
)

export default Occupied