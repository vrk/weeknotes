import React, { Component } from 'react';
import { Link } from 'react-router'

import './Header.css';

class SignedOutNav extends Component {
  render() {
    return (
        <nav>
          <nav className="left">
            <span className="link"><Link to="/login">Log in</Link></span>
          </nav>
          <nav className="right">
            <span className="link"><Link to="/signup">Sign up</Link></span>
            <span className="link"><Link to="/about">About</Link></span>
          </nav>
        </nav>
    );
  }
}

export default SignedOutNav;
