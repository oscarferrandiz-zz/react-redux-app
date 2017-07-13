import actionPrefix from 'utils/prefix';

const prefix = actionPrefix('DATASETS');

/* Constants */
const SET = prefix('SET');
const GET = prefix('GET');
const SET_LOADING = prefix('SET_LOADING');
const SET_ERROR = prefix('SET_ERROR');

/* Initial state */
const initialState = {
  list: [],
  error: null,
  loading: false
};

function datasetsReducer(state = initialState, action) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        list: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

/* Action creators */
const setDatasets = datasets => ({
  type: SET,
  payload: datasets
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

const setError = error => ({
  type: SET_ERROR,
  payload: error
});

const getDatasets = () => ({
  type: GET
});

export {
  // Reducer
  datasetsReducer,

  // Action creators
  setDatasets,
  setLoading,
  setError,
  getDatasets,

  // Constants
  GET
};
