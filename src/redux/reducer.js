import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as reducers from './modules';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default reducer;
