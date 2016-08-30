import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Header from './Header'
import WeekNoteForm from './WeekNoteForm'

import './App.css';

class App extends Component {
  // Override
  render() {
    return (
      <div className="App">
        <Header />
        <div id="main">
          <DateHeader />
          <WeekNoteForm />
        </div>
      </div>
    );
  }
}

export default App;

