import React, { Component } from 'react';
import { Link } from 'react-router'

import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      auth: null,
      isInitialized: false,
      isSignedIn: false,
      currentUser: null
    };

    this.onLogOutClick_ = this.onLogOutClick_.bind(this);
  }

  componentDidMount() {
    // Lolz inject the Google API script element so that we can access the global
    // gapi object after the initial document load.
    let script = document.createElement('script');
    document.body.appendChild(script);

    // Lolz awesome Google API login stuffs.
    script.onload = () => {
      gapi.load('auth2', () => {
        let auth = gapi.auth2.init({
          client_id: '813404364581-8dma5mlhtfu2stg75d3niotiup4h57lv.apps.googleusercontent.com',
          fetch_basic_profile: true,
          scope: 'profile'
        });
        auth.then(() => {
          this.setState({
            auth: auth,
            isInitialized: true,
            isSignedIn: auth.isSignedIn.get(),
            currentUser: auth.currentUser.get()
          });
        });
      });
    };
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
  }

  getNav_() {
    if (!this.state.isInitialized)
      return null;

    if (this.state.isSignedIn) {
      return <SignedInNav currentUser={this.state.currentUser}
                          onLogOutClick={this.onLogOutClick_}/>;
    }

    return <SignedOutNav />;
  }

  render() {
    return (
      <div id="header">
        <div id="logo"><Link to="/">week&middot;notes</Link></div>
        {this.getNav_()}
        <hr/>
      </div>
    );
  }

  onLogOutClick_() {
    let auth = this.state.auth;
    auth.signOut().then(() => {
      console.log('signing out!');
      this.forceUpdate();
    });
  }
}

export default Header;
