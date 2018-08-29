import React from 'react'
import { Mutation } from 'react-apollo'

import { RESET_STATUS } from '../../../../../../consts/mutations'
import  DEFAULT_QUERY  from '../../../../../../consts/query'

const MessageWithMutation = (props) => {
    return (
        <Mutation mutation={RESET_STATUS}>
            {(resetStatus , {data}) =>
                <div className={props.cssClass} onClick={() => {
                    resetStatus({
                         update: (cache, mutationResults) => {
                            cache.writeQuery({
                                query: DEFAULT_QUERY,
                                data: { status: mutationResults.data.resetStatus}
                            })
                        }
                    })
                }}>
                    {props.message}
                </div>
            }
        </ Mutation>
    )
}

export default MessageWithMutation
