import {
  SET,
  SET_LOADING,
  SET_ERROR
} from './constants';
import { getDatasets } from 'utils/api';
import datasetNormalizer from './schema';

/* Action creators */
const setDatasets = datasets => ({
  type: SET,
  payload: datasetNormalizer(datasets)
});

const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

const setError = error => ({
  type: SET_ERROR,
  payload: error
});

/* Thunks */
const fetchDatasets = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await getDatasets();
    const data = await response.json();
    dispatch(setDatasets(data.data));
  } catch (error) {
    dispatch(setError(error.message));
  }

  dispatch(setLoading(false));
};

export { setDatasets, setLoading, setError, fetchDatasets };
