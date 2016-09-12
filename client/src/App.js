import React, { Component } from 'react';

import Header from './Header'
import Main from './Main'
import SignUp from './SignUp'

import './App.css';

class App extends Component {
  // Override
  /*
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
    */
  render() {
    return (
      <div className="App">
        <Header />
        <SignUp />
      </div>
    );
  }
}

export default App;

