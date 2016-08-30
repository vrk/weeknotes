import React, { Component } from 'react';

import WeekNote from './WeekNote'
import WeekNoteEditor from './WeekNoteEditor'

class WeekNoteForm extends Component {
  constructor() {
    super();

    this.state = {
      editorActive: false
    };
    this.handleFormBlur = this.handleFormBlur.bind(this);
    this.handleEditorActivate = this.handleEditorActivate.bind(this);
  }

  // Override
  render() {
    return (
      <form onBlur={this.handleFormBlur}>
        <WeekNote
          contents="TODO:"
          active={!this.state.editorActive}
          onActivate={this.handleEditorActivate} />
        <WeekNoteEditor contents="TODO:" active={this.state.editorActive} />
      </form>
    );
  }

  handleFormBlur() {
    this.setState({ editorActive: false });
  }

  handleEditorActivate() {
    this.setState({ editorActive: true });
  }
}

export default WeekNoteForm;

