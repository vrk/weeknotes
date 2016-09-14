import React, { Component } from 'react';
import { Link } from 'react-router'

import { LOGIN } from './WeekNoteActions'

import './SignUp.css';

class GoogleLoginLink extends Component {
  constructor() {
    super();
    this.onSignUp_ = this.onSignUp_.bind(this);
  }

  // Override
  componentWillMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
        this.forceUpdate()
    );
  }

  // Override
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Link {...this.props} onClick={this.onSignUp_}/>
    );
  }

  onSignUp_() {
    const { store } = this.context;
    let state = store.getState();
    let auth = state.auth;
    auth.signIn().then(() => {
      debugger;
      let currentUser = auth.currentUser.get();
      store.dispatch({
        type: LOGIN,
        user: currentUser 
      });
		});
  }
}
GoogleLoginLink.contextTypes = {
  store: React.PropTypes.object
};

export default GoogleLoginLink;
