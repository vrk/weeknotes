import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="logo">week&middot;notes</div>
        <nav>
          <nav className="left">
            <span className="link">Log in</span>
          </nav>
          <nav className="right">
            <span className="link">Sign up</span>
            <span className="link">About</span>
          </nav>
        </nav>
        <hr/>
      </div>
    );
  }
}

export default Header;
