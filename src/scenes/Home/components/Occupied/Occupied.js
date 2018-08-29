import React from 'react'
import './Occupied.less'
import CounterWithMutation from './components/CounterWithMutation/CounterWithMutation'

const messageOcc  = 'Zajęte'
const pressToFinish= 'Nacisnij by zakończyć'

class Occupied extends React.Component {
constructor(props) {
    super(props)
    this.state = {token: localStorage.getItem('jwtToken') }
}
 render() {
     return(
        <div className={`occupied  ${this.props.cssClass}`}>
            {this.state.token ?
                <div className='occupied__title occupied__title--smaller'> {pressToFinish} </div>
                :
                <div className='occupied__title'> {messageOcc} </div>
            }
            <CounterWithMutation date={this.props.date} cssClass='occupied__counter'/>
        </div>
    )
 }
}

export default Occupied