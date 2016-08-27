import React, { Component } from 'react';
import Remarkable from 'remarkable';

import './WeekNote.css';

class WeekNote extends Component {
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div id="week-note">
        <div dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default WeekNote;

