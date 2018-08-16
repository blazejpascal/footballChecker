import React from 'react';
import { graphql } from  'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

const TRIAL_NAME= gql`
    {
        status {
            isAvailable,
            endTime
        }
    }

`

const setStatus = gql`
    mutation setStatus($status: StatusInput!) {
    setStatus(status: $status) {
    isAvailable,
    endTime
  }
}
`

class TableBooking extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let endTimeCounter = moment().add(2, 'minutes').format('YYYY-MM-DD H:mm')
        console.log(endTimeCounter)
        this.props.mutate({
            variables: {
                status: {
                endTime: endTimeCounter
                }
            },
            update: (cache, mutationResults) => {
                console.log(mutationResults)
                cache.writeQuery({
                    query: TRIAL_NAME,
                    data: { status: mutationResults.data.setStatus}
                })
            }
        })
    }

    render() {
        return (
            <div className="table-booking">
            </div>
        )
    }
}

const TableBookingWithMutation = graphql(setStatus)(TableBooking)
export default TableBookingWithMutation

