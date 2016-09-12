import React, { Component } from 'react';
import Remarkable from 'remarkable';

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
  render() {
    if (!this.props.active) return null;

    return (
      <div id="week-note" onClick={this.props.onActivate}>
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
    console.log("clickeddd");
  }
}

WeekNote.contextTypes = {
  store:  React.PropTypes.object
};

export default WeekNote;

