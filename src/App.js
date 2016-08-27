import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Header from './Header'
import WeekNote from './WeekNote'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="main">
          <DateHeader />
          <WeekNote>TODO:</WeekNote>
        </div>
      </div>
    );
  }
}

export default App;
