import React, { Component } from 'react';

import './WeekNoteEditor.css';

class WeekNoteEditor extends Component {
  // Override
  render() {
    if (!this.props.active) return null;
    return (
      <textarea
        ref={(input) => { if (input != null) input.focus(); }}
        defaultValue={this.props.contents} />
    );
  }
}

export default WeekNoteEditor;

