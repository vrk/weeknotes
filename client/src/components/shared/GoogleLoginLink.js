import React, { Component } from 'react';
import { Link } from 'react-router'

import { LOGIN } from '../../actions/WeekNoteActions'
import Requests from '../../libs/Requests'

class GoogleLoginLink extends Component {
  constructor() {
    super();
    this.onSignUp_ = this.onSignUp_.bind(this);
  }

  // Override
  componentWillMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
        this.forceUpdate();
    });
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
      let currentUser = auth.currentUser.get();
      Requests.fetchUserNotes(currentUser).then((response) => {
        store.dispatch({
          type: LOGIN,
          user: currentUser,
          notes: response[0].notes || []
        });
      });
		});
  }
}
GoogleLoginLink.contextTypes = {
  store: React.PropTypes.object
};

export default GoogleLoginLink;
