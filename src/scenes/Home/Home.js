import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import './Home.less'
import Available from './components/Available/Available'
import Occupied from './components/Occupied/Occupied'

class Home extends React.Component {
    render() {
        return (
            <Query
                query={gql`
                    {
                        status {
                            isAvailable,
                            endTime
                        }
                    }

                `}
                >
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) {
                        console.log(error);
                        return
                    }

                    return (
                        <div className="home">
                            {data.status.isAvailable ?
                                (<Available cssClass="card" />)
                                :
                                (<Occupied cssClass="card" date={data.status.endTime} />)
                            }
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default Home