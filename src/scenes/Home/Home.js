import React from 'react'
import './Home.css'
import Available from './components/Available/Available'
import Occupied from './components/Occupied/Occupied'

const Home = () => (
    <div className="home">
        <Available />
        <Occupied />
    </div>
)

export default Home