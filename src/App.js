import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Header from './Header'
import WeekNotes from './WeekNotes'

import './App.css';

class App extends Component {
  // Override
  render() {
    return (
      <div className="App">
        <Header />
        <div id="main">
          <DateHeader />
          <WeekNotes />
        </div>
      </div>
    );
  }
}

export default App;

