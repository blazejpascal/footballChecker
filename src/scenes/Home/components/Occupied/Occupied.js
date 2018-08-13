import React from 'react'
import './Occupied.css'
import Countdown from './components/counter/counter'

const message  = 'Zajęte'
const elo = new Date('2018-08-13 16:30')


const Occupied = props => (
    <div className={`occupied  ${props.cssClass}`} onClick={props.onClick}>
        <div className='occupied__title'> {message} </div>
        <Countdown date={props.date}/>

    </div>
)

export default Occupied