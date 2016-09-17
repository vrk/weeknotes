import React, { Component } from 'react';

import EditorMain from './EditorMain'
import subscribeToStore from '../../lib/Subscribe'

class Main extends Component {
  // Override
  render() {
    const { store } = this.context;
    let state = store.getState();

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

