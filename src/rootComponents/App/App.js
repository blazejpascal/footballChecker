import React, { Component } from 'react';
import './App.less';
import Home from '../../scenes/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App__container App__darken-pseudo'>
        <header className="App-header">
            <h1 className="App-title">Welcome to Table Football in Avra</h1>
        </header>

          <Home />
        </div>
      </div>
    );
  }
}

export default App;
