import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

export default function createApolloClient() {
    const apolloCache = new InMemoryCache()
    const apolloLink = new HttpLink({uri: "https://table-football-server.herokuapp.com/graphql"})
    const authLink = setContext((_,{ headers }) => {
        const token = localStorage.getItem('jwtToken')
        console.log(token)
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ""
            }
        }
    })
    return new ApolloClient({
        cache: apolloCache,
        link: authLink.concat(apolloLink) ,
    })
}