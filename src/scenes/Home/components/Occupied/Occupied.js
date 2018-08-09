import React from 'react'
import './Occupied.css'
import Countdown from './components/counter/counter'

const message  = 'Zajęte'
const elo = new Date('2018-08-09 16:30')


const Occupied = () => (
    <div className='occupied'>
        <div className='occupied__title'> {message} </div>
        <Countdown date={elo}/>

    </div>
)

export default Occupied