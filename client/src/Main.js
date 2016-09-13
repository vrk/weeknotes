import React, { Component } from 'react';

import EditorMain from './EditorMain'

class Main extends Component {
  constructor() {
    super();
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

export default Main;

