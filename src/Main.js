import React, { Component } from 'react';

import DateHeader from './DateHeader'
import WeekDate from './WeekDate'
import WeekNoteForm from './WeekNoteForm'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      week: new WeekDate()
    };

    this.onUpdateWeek = this.onUpdateWeek.bind(this);
  }
  // Override
  render() {
    return (
        <div id="main">
          <DateHeader week={this.state.week} onUpdateWeek={this.onUpdateWeek}/>
          <WeekNoteForm />
        </div>
    );
  }

  onUpdateWeek(action) {
    switch(action) {
      case 'increment':
        this.state.week.incrementWeek();
        this.forceUpdate();
        break;
      case 'decrement':
        this.state.week.decrementWeek();
        this.forceUpdate();
        break;
      case 'reset':
        this.setState({
          week: new WeekDate()
        });
        break;
      default:
        throw new Error('Unknown action to updateWeek: ' + action);
    }
  }
}

export default Main;

