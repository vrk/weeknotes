import React, { Component } from 'react';

import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div id="main">
        <div id="sign-up-container">
          <h1>sign&middot;up</h1>
          <hr/>
          <p>Weeknotes will NEVER post to your Facebook, send your friends notifications, email you or your contacts, or otherwise do dirtbag things. Promise!
          </p>
          <button>Sign up with Facebook</button>
          <button>Sign up with Google</button>
          <hr/>
          Or log in if you already have an account.
        </div>
      </div>
    );
  }
}

export default SignUp;


