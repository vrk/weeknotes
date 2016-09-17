import React, { Component } from 'react';

import Header from './header/Header'
import Requests from '../lib/Requests'
import loadGoogleApi from '../lib/GoogleAuthApi'
import { OAUTH_LOADED } from '../actions/WeekNoteActions'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.onGoogleApiLoaded_ = this.onGoogleApiLoaded_.bind(this);
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

  componentDidMount() {
    loadGoogleApi(this.onGoogleApiLoaded_);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }

  onGoogleApiLoaded_(auth) {
    let currentUser = null;
    const { store } = this.context;

    if (auth.isSignedIn.get()) {
      currentUser = auth.currentUser.get();
      Requests.fetchUserNotes(currentUser).then((response) => {
        store.dispatch({
          type: OAUTH_LOADED,
          auth: auth,
          user: currentUser,
          notes: response[0].notes || []
        });
      });
      return; 
    }

    store.dispatch({
      type: OAUTH_LOADED,
      auth: auth,
      user: currentUser,
      notes: []
    });
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};

export default App;

