import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import rootReducer from './AppReducers'
import App from './App';
import Main from './Main';
import SignUp from './SignUp'

import './index.css';

function configureStore() {
  const store = createStore(rootReducer);
  return store;
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}> 
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="/signup" component={SignUp}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
