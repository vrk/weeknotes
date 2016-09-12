import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.onSignUp_ = this.onSignUp_.bind(this);
  }

  render() {
    return (
      <div id="main">
        <div id="sign-up-container">
          <h1>sign&middot;up</h1>
          <hr/>
          <p>Weeknotes will NEVER post to your Facebook, send your friends notifications, email you or your contacts, or otherwise do dirtbag things. Promise!
          </p>
          <button onClick={this.onSignUp_}>Sign up with Google</button>
          <hr/>
          Or log in if you already have an account.
        </div>
      </div>
    );
  }

  onSignUp_() {
    let auth = gapi.auth2.getAuthInstance();
    auth.signIn().then(() => {
			console.log(auth.currentUser.get().getId());
      browserHistory.push('/');
		});
  }
}

export default SignUp;


