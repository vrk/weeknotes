import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Header from './Header'
import WeekNote from './WeekNote'
import WeekNoteEditor from './WeekNoteEditor'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }


  // Override
  render() {
    return (
      <div className="App">
        <Header />
        <div id="main">
          <DateHeader />
          <WeekNote contents="TODO:" />
          <WeekNoteEditor contents="TODO:" />
        </div>
      </div>
    );
  }
}

export default App;
