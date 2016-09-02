import React, { Component } from 'react';
import './DateArrow.css';

export default class DateArrow extends Component {
  // Override
  render() {
    let activeClassName = 'arrow';
    if (!this.props.active) {
      activeClassName = 'arrow hidden';
    }
    
    return (
      <span className={activeClassName} onClick={this.props.onClick}>
        {this.getArrowBody()}
      </span>
    );
  }

  getArrowBody() {
    switch (this.props.direction) {
      case 'left':
        return '<  ';
      case 'right':
        return '  >';
      default:
        return '  >';
    }
  }
}

