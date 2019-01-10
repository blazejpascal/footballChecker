import React from 'react'
import './Occupied.less'
import CounterWithMutation from './components/CounterWithMutation/CounterWithMutation'
import MessageWithMutation from './components/MessageWithMutation/MessageWithMutation'

const messageOcc  = 'Zajęte'
const pressToFinish= 'Naciśnij by zakończyć'

class Occupied extends React.Component {
constructor(props) {
    super(props)
    this.state = {token: localStorage.getItem('jwtToken') }
}
 render() {
     return(
        <div className={`occupied  ${this.props.cssClass}`}>
            {this.state.token ?
                <MessageWithMutation cssClass='occupied__title occupied__title--smaller' message={pressToFinish} />
                :
                <div className='occupied__title'> {messageOcc} </div>
            }
            <CounterWithMutation date={this.props.date} cssClass='occupied__counter'/>
        </div>
    )
 }
}

export default Occupied
