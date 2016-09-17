import React, { Component } from 'react';

import EditorMain from './EditorMain'
import subscribeToStore from '../../lib/Subscribe'

// TODO(vrk): This actually shouldn't be in the editor/ directory.
class Main extends Component {
  // Override
  render() {
    const { store } = this.context;
    let state = store.getState();

    // TODO(vrk): Return splash screen when not logged in.
    if (!state.auth || !state.currentUser)
      return null;

    return (
      <EditorMain />
    );
  }
}

Main.contextTypes = {
  store: React.PropTypes.object
};

Main = subscribeToStore(Main);
export default Main;

