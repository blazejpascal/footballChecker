import React, { Component } from 'react';
import {ApolloProvider} from 'react-apollo'
import createApolloClient from '../../core/createApolloClient'
import {BrowserRouter as Router,
        Route} from 'react-router-dom';
import './App.less';
import Home from '../../scenes/Home/Home'
import TableBookingWithMutation from '../../scenes/TableBookingWithMutation/TableBookingWithMutation'

const client = createApolloClient()

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
          <Router>
             <div className="App">
                 <Route exact path="/" component={Home} />
                 <Route path="/test" component={TableBookingWithMutation} />
            </div>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
