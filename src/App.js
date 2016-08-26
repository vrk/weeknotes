import React, { Component } from 'react';
import Header from './Header'
import NoteNavigation from './NoteNavigation'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NoteNavigation />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
