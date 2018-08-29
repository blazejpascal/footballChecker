import React from 'react'
import { Mutation } from 'react-apollo'

import { RESET_STATUS } from '../../../../../../consts/mutations'
import  DEFAULT_QUERY  from '../../../../../../consts/query'



class MessageWithMutation extends React.Component {

    removeFromLocal() {
        localStorage.removeItem('jwtToken')
    }

    componentWillUnmount(){
        this.removeFromLocal()
    }

    render(){
        return (
            <Mutation mutation={RESET_STATUS}>
                {(resetStatus , {data}) =>
                    <div className={this.props.cssClass} onClick={() => {
                        resetStatus({
                             update: (cache, mutationResults) => {
                                cache.writeQuery({
                                    query: DEFAULT_QUERY,
                                    data: { status: mutationResults.data.resetStatus}
                                })
                            }
                        })
                    }}>
                        {this.props.message}
                    </div>
                }
            </ Mutation>
        )
    }
}

export default MessageWithMutation
