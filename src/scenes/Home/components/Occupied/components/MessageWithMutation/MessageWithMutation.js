import React from 'react'


class MessageWithMutation extends React.Component {
    constructor(props){
        super(props)
    this.state = {

    }
    }

    onclick() {

    }

    render() {
        return (

        <div className={this.props.cssClass}> {this.props.message} </div>
        )
    }
}

export default MessageWithMutation