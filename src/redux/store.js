import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middlewareRouter = routerMiddleware(browserHistory);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(middlewareRouter, thunk),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;
