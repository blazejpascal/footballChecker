import React from 'react'
import './Occupied.less'
import CounterWithMutation from './components/CounterWithMutation/CounterWithMutation'

const message  = 'Zajęte'

const Occupied = props => (
    <div className={`occupied  ${props.cssClass}`} onClick={props.onClick}>
        <div className='occupied__title'> {message} </div>
        <CounterWithMutation date={props.date} cssClass='occupied__counter'/>
    </div>
)

export default Occupied
