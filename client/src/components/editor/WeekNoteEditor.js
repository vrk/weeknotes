/* @flow */

import React, { Component } from 'react';
import assert from 'assert';

import './WeekNoteEditor.css';

class WeekNoteEditor extends Component {
  handleTextChange: () => void;
  constructor() {
    super();

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  render() {
    if (!this.props.active) return null;
    return (
      <textarea
        onChange={this.handleTextChange}
        ref={(input) => { if (input != null) input.focus(); }}
        defaultValue={this.props.contents} />
    );
  }

  handleTextChange(e: Event) {
    assert(e.target instanceof HTMLTextAreaElement);
    if (e.target instanceof HTMLTextAreaElement) {
      var value = e.target.value;
      this.props.onUpdateText(value);
    }
  }
}

export default WeekNoteEditor;

