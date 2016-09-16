import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Requests from './Requests'
import WeekDate from './WeekDate'
import WeekNoteForm from './WeekNoteForm'
import { LOCAL_NOTE_UPSERT } from './WeekNoteActions'

class EditorMain extends Component {
  constructor() {
    super();

    this.state = {
      week: new WeekDate()
    };

    this.timerId = null;
    this.onUpdateWeek = this.onUpdateWeek.bind(this);
    this.onUpdateEntry = this.onUpdateEntry.bind(this);
  }

  // Override
  componentWillMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
        this.forceUpdate()
    );
  }

  // Override
  componentWillUnmount() {
    this.unsubscribe();
  }

  // Override
  render() {
    const { store } = this.context;
    let state = store.getState();
    let entries = state.notes || {};

    const entry = entries[this.state.week.getId()] || '';
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
        // TODO(vrk): fix this so I don't have to use forceUpdate
        this.state.week.incrementWeek();
        this.forceUpdate();
        break;
      case 'decrement':
        // TODO(vrk): fix this so I don't have to use forceUpdate
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
    console.log('updating entry');
    let newEntry = {
      week_id: this.state.week.getId(),
      contents: contents
    };

    const { store } = this.context;
    store.dispatch({
      type: LOCAL_NOTE_UPSERT,
      note: newEntry 
    });

    this.saveEntryToServer(newEntry);
  }

  saveEntryToServer(newEntry) {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    const { store } = this.context;
    let state = store.getState();
    let auth = state.auth;
    let currentUser = auth.currentUser.get();
    let note = newEntry;
    this.timerId = setTimeout(() => {
      console.log('save to server');
      Requests.saveUserNote(currentUser, note).then((response) => {
        console.log(response);
      });
    }, 750);
  }
}
EditorMain.contextTypes = {
  store: React.PropTypes.object
};

export default EditorMain;

