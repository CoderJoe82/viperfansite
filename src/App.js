import React, { Component } from 'react';
import Routes from './Routes'
import './Loader'

class App extends Component {

  render() {
    return (
      <div id="app">
        <Routes />
      </div>
    );
  }
}

export default App