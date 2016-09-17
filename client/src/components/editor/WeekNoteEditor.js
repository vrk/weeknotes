import React, { Component } from 'react';

import './WeekNoteEditor.css';

class WeekNoteEditor extends Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
  }
  // Override
  render() {
    if (!this.props.active) return null;
    return (
      <textarea
        onChange={this.handleTextChange}
        ref={(input) => { if (input != null) input.focus(); }}
        defaultValue={this.props.contents} />
    );
  }

  handleTextChange(e) {
    var value = e.target.value;
    this.props.onUpdateText(value);
  }
}

export default WeekNoteEditor;
