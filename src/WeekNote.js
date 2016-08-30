import React, { Component } from 'react';
import Remarkable from 'remarkable';

import { EDITOR_FOCUS } from './WeekNoteActions'

import './WeekNote.css';

class WeekNote extends Component {
  constructor() {
    super();

    this.state = {
      // Represents whether or not the component is visible and activated.
      active: true
    };

    // Bind event handlers.
    this.handleClick = this.handleClick.bind(this);
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
    const state = store.getState();

    if (state.isNoteEditorActive) return null;

    return (
      <div id="week-note" onClick={this.handleClick}>
        <div dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }

  // Helper function returning raw HTML for the contents of this component as
  // rendered by markdown.
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.contents);
    return { __html: rawMarkup };
  }

  // On-click handler for the body of the note.
  handleClick() {
    const { store } = this.context;
    store.dispatch({ type: EDITOR_FOCUS });
  }
}

WeekNote.contextTypes = {
  store:  React.PropTypes.object
};

export default WeekNote;

