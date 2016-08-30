import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { EDITOR_BLUR } from './WeekNoteActions'

import './WeekNoteEditor.css';

class WeekNoteEditor extends Component {
  constructor() {
    super();

    this.state = {
      // Represents whether or not the component is visible and activated.
      active: true
    };

    this.handleFormBlur = this.handleFormBlur.bind(this);
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

    if (!state.isNoteEditorActive) return null;

    return (
      <form onBlur={this.handleFormBlur}>
        <textarea
          ref={(input) => { if (input != null) input.focus(); }}
          defaultValue={this.props.contents} />
      </form>
    );
  }

  handleFormBlur() {
    window.console.log('hay blur');
    const { store } = this.context;
    store.dispatch({ type: EDITOR_BLUR });
  }
}

WeekNoteEditor.contextTypes = {
  store:  React.PropTypes.object
};

export default WeekNoteEditor;

