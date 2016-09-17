import React, { Component } from 'react';

export default function subscribe(ChildComponent) {
  class Subscriber extends Component {
    componentWillMount() {
      const { store } = this.context;
      this.unsubscribe = store.subscribe(() =>
          this.forceUpdate()
      );
    }
    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return <ChildComponent {...this.props} {...this.state} />;
    }
  }

  Subscriber.contextTypes = {
    store: React.PropTypes.object
  };

  return Subscriber;
};

