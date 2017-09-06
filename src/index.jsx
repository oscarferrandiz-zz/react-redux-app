/* Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

/* Packages */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/* Store */
import store from './redux/store';

/* Routes */
import getRoutes from './routes';

/* Styles */
import './styles/index.scss';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes()} />
  </Provider>,
  document.getElementById('app')
);
