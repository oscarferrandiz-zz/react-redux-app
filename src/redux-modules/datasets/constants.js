import actionPrefix from 'utils/prefix';

const prefix = actionPrefix('DATASETS');

const SET = prefix('SET');
const SET_LOADING = prefix('SET_LOADING');
const SET_ERROR = prefix('SET_ERROR');

export {
  SET,
  SET_LOADING,
  SET_ERROR
};
