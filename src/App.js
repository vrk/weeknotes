import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Header from './Header'
import NoteNavigation from './NoteNavigation'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="main">
          <DateHeader />
        </div>
      </div>
    );
  }
}

export default App;
