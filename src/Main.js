import React, { Component } from 'react';

import DateHeader from './DateHeader'
import WeekDate from './WeekDate'
import WeekNoteForm from './WeekNoteForm'

class Main extends Component {
  constructor() {
    super();
    let entries = this._loadEntriesFromLocalStorage();

    this.state = {
      week: new WeekDate(),
      entries: entries || {}
    };

    this.onUpdateWeek = this.onUpdateWeek.bind(this);
    this.onUpdateEntry = this.onUpdateEntry.bind(this);
  }

  // Override
  render() {
    const entry = this.state.entries[this.state.week.getId()] || '';
    return (
        <div id="main">
          <DateHeader week={this.state.week} onUpdateWeek={this.onUpdateWeek}/>
          <WeekNoteForm contents={entry}
            onUpdateEntry={this.onUpdateEntry} />
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

  onUpdateEntry(contents) {
    let newEntry = {};
    newEntry[this.state.week.getId()] = contents;
    this._saveEntriesToLocalStorage();
    this.setState({ entries: Object.assign({}, this.state.entries, newEntry) });
  }

  _saveEntriesToLocalStorage() {
    localStorage.setItem(
      '__WEEK_NOTES_ENTRIES__', JSON.stringify(this.state.entries));
  }

  _loadEntriesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('__WEEK_NOTES_ENTRIES__'));
  }
}

export default Main;

