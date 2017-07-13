import { delay } from 'redux-saga';
import { call, fork } from 'redux-saga/effects';

function* standBy() {
  yield call(delay, 1000);
  console.log('We are on stand-by!');
}

export default function* rootSaga() {
  yield [
    fork(standBy)
  ];
}
