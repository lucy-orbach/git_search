// entry point of my Application
import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from 'src/reducers/rootReducer';
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000); //nodes, delay
}
import App from 'src/App';
import 'src/index.css';

// Redux store init...
let store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('app')
);
