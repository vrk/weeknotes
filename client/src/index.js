import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router'

import App from './App';
import Main from './Main';
import SignUp from './SignUp'

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/signup" component={SignUp}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
