import React, { Component } from 'react';

import Header from './Header'
import loadGoogleApi from './GoogleAuthApi'
import { OAUTH_LOADED } from './WeekNoteActions'

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
    if (auth.isSignedIn.get()) {
      currentUser = auth.currentUser.get();
    }
    const { store } = this.context;
    store.dispatch({
      type: OAUTH_LOADED,
      auth: auth,
      user: currentUser 
    });
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};

export default App;

