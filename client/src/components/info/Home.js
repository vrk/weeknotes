/* @flow */

import { Link } from 'react-router';
import React, { Component } from 'react';

import GoogleLoginLink from '../shared/GoogleLoginLink'

import './Home.css';

class Home extends Component {
  // Override
  render() {
    return (
      <div id="main">
        <div className="description">
          <p>
            Weeknotes is a free tool that lets you create a weekly log of <strong>private notes</strong>.
          </p>

          <div className="more">
            <p>
              This is a hobby project of <a href="https://github.com/vrk">vrk</a> and is completely open source!
              (<a href="https://github.com/vrk/weeknotes">See the code</a>)
            </p>
          </div>

        </div>

        <div className="sign-up">
          <GoogleLoginLink className="home-sign-up" to="/">Sign up</GoogleLoginLink>
          <p>
            Or <Link to="/about">learn more</Link> about how it works!!<br/>
            (There's...not much to it.)
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

