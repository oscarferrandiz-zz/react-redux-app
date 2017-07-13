import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import * as reducers from './modules';
import getRoutes from './routes';

import './styles/index.scss';

/* Reducer */
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const middlewareRouter = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();

/* Store */
const store = createStore(
  reducer,
  compose(
    applyMiddleware(middlewareRouter, sagaMiddleware),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes()} />
  </Provider>,
  document.getElementById('app')
);
