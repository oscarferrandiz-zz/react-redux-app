import {
  SET,
  SET_LOADING,
  SET_ERROR
} from './constants';
import { createReducer } from '@/redux/utils';

/* Initial state */
const INITIAL_STATE = {
  list: [],
  error: null,
  loading: false
};

export default createReducer(INITIAL_STATE, {

  [SET](state, action) {
    return {
      ...state,
      list: action.payload
    };
  },

  [SET_LOADING](state, action) {
    return {
      ...state,
      loading: action.payload
    };
  },

  [SET_ERROR](state, action) {
    return {
      ...state,
      error: action.payload
    };
  }
});
