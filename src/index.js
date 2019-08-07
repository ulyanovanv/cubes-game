import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from "react-redux";

import './App.scss';
import App from './App.jsx';
import ErrorBoundary from './js/components/ErrorBoundary.jsx';
import store from './js/store/index.js';

const root = document.getElementById('root');

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  root
);
