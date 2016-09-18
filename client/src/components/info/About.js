/* @flow */

import React, { Component } from 'react';

class About extends Component {
  // Override
  render() {
    return (
      <div id="main">
        <h1 className="static-header">about week&middot;notes</h1>
        <p>
          <strong>What is this thing?</strong><br/>
          This is a tiny web app that lets you write, save, and edit personal notes for the week.<br/>
          All notes are <strong>private</strong> and can only be seen by you.
        </p>

        <p>
          <strong>Weeknotes is open source!</strong><br/>
          This is an open source web app distributed under the <a href="http://choosealicense.com/licenses/mit/">MIT License</a>.<br/>
          I find it useful, but I made it mostly for educational purposes. No guarantees on speed, reliability, etc.<br/>
          <a href="https://github.com/vrk/weeknotes">View the source code on Github</a>!
        </p>
      </div>
    );
  }
}

export default About;

