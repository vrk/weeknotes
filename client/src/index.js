import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import rootReducer from './reducers/AppReducers'
import App from './components/App';
import Main from './components/editor/Main';
import SignUp from './components/signup/SignUp'

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
