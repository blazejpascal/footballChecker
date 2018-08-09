import React, { Component } from 'react';
import './App.css';
import Home from '../../scenes/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome Table Football in Avra</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
