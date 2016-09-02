import React, { Component } from 'react';

import DateHeader from './DateHeader'
import WeekNoteForm from './WeekNoteForm'

class Main extends Component {
  // Override
  render() {
    return (
        <div id="main">
          <DateHeader />
          <WeekNoteForm />
        </div>
    );
  }
}

export default Main;

