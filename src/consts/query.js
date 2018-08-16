import gql from "graphql-tag";

const DEFAULT_QUERY = gql`
    {
        status {
            isAvailable,
            endTime
        }
    }

`

export default DEFAULT_QUERY