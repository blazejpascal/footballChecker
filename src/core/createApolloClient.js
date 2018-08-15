import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'

export default function createApolloClient() {
    const apolloCache = new InMemoryCache()
    return new ApolloClient({
        cache: apolloCache,
        link: new HttpLink({uri: "https://table-football-server.herokuapp.com/graphql"}),
    })
}