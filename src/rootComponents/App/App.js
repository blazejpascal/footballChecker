import React, { Component } from 'react';
import {ApolloProvider} from 'react-apollo'
import createApolloClient from '../../core/createApolloClient'
import './App.less';
import Home from '../../scenes/Home/Home'

const client = createApolloClient()

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
          <div className="App">
            <div className='App__container App__darken-pseudo'>
            <header className="App-header">
                <h1 className="App-title">Welcome to Table Football in Avra</h1>
            </header>

              <Home />
            </div>
          </div>
      </ApolloProvider>
    );
  }
}

export default App;
