import { takeLatest, put, call } from 'redux-saga/effects';

/* Rest api comunication */
import { getDatasets } from 'utils/api';

/* Modules */
import { setDatasets, setLoading, setError, GET } from 'modules/datasets';

function* loadDatasets() {
  yield put(setLoading(true));

  try {
    const response = yield call(getDatasets);
    const data = yield response.json();
    yield put(setDatasets(data.data));
  } catch (error) {
    yield put(setError(error.message));
  }

  yield put(setLoading(false));
}

export default function* rootSaga() {
  yield [
    takeLatest(GET, loadDatasets)
  ];
}
