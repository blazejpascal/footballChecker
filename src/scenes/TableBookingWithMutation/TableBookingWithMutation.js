import React from 'react';
import moment from 'moment'
import { graphql } from  'react-apollo'
import {withRouter} from 'react-router-dom'

import DEFAULT_QUERY from '../../consts/query'
import {setStatus} from "../../consts/mutations";


class TableBooking extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let endTimeCounter = moment().add(2, 'minutes').format('YYYY-MM-DD HH:mm')
        this.props.mutate({
            variables: {
                status: {
                endTime: endTimeCounter
                }
            },
            update: (cache, mutationResults) => {
                cache.writeQuery({
                    query: DEFAULT_QUERY,
                    data: { status: mutationResults.data.setStatus}
                })
            }
        })
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="table-booking">
            </div>
        )
    }
}

const TableBookingWithMutation = graphql(setStatus)(TableBooking)
export default withRouter(TableBookingWithMutation)

