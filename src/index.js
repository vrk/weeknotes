import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import rootReducer from './AppReducers'

import './index.css';

function configureStore() {
  const store = createStore(rootReducer);
  return store;
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
