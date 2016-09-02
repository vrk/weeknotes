import React, { Component } from 'react';

import WeekNote from './WeekNote'
import WeekNoteEditor from './WeekNoteEditor'

class WeekNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorActive: false
    };
    this.onUpdateText = this.onUpdateText.bind(this);
    this.handleFormBlur = this.handleFormBlur.bind(this);
    this.handleEditorActivate = this.handleEditorActivate.bind(this);
  }

  // Override
  render() {
    this.updatingText = this.props.contents;
    return (
      <form onBlur={this.handleFormBlur}>
        <WeekNote
          contents={this.props.contents}
          active={!this.state.editorActive}
          onActivate={this.handleEditorActivate}
        />
        <WeekNoteEditor
          contents={this.props.contents}
          active={this.state.editorActive}
          onUpdateText={this.onUpdateText}
        />
      </form>
    );
  }

  onUpdateText(text) {
    this.props.onUpdateEntry(text);
  }

  handleFormBlur() {
    this.setState({ editorActive: false });
  }

  handleEditorActivate() {
    this.setState({ editorActive: true });
  }
}

export default WeekNoteForm;

