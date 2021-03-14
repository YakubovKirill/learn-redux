import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers';
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'

const store = createStore(
  allReducers,
  applyMiddleware(ReduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
