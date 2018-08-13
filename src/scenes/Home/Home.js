import React from 'react'
import './Home.less'
import Available from './components/Available/Available'
import Occupied from './components/Occupied/Occupied'

const Home = () => (
    <div className="home">
        <Available cssClass="card" />
        <Occupied cssClass="card" />
    </div>
)

export default Home