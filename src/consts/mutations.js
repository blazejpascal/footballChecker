import gql from "graphql-tag";

export const upgradeStatus = gql`
    mutation updateStatus {
        updateStatus {
            isAvailable,
            endTime
      }
}
`

export const setStatus = gql`
    mutation setStatus($status: StatusInput!) {
      setStatus(status: $status) {
        isAvailable,
        endTime,
        resetToken
      }
}
`

export const RESET_STATUS = gql`
   mutation resetStatus {
     resetStatus {
       isAvailable,
       endTime
     }
   }
`