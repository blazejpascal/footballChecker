import React from 'react';
import { graphql } from  'react-apollo'
import gql from 'graphql-tag'
import moment from 'moment'

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
        let endTimeCounter = moment().add(3, 'minutes').format('YYYY-MM-DD H:mm')
        this.props.mutate({
            variables: {
                status: {
                endTime: endTimeCounter
                }
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

