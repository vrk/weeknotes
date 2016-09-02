import React, { Component } from 'react';
import './DateHeader.css';

class DateHeader extends Component {
  // Override
  render() {
    return (
      <h2 id="date-header" onMouseOver={this.onMouseOver}>
        August 8 - August 14, 2016
      </h2>
    );
  }

  onMouseOver() {
    console.log('mouseover');
  }

  onMouseOut() {
    console.log('mouseout');
  }

  onClick() {
    console.log('click');
  }
}

export default DateHeader;

