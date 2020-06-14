import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { RequestRobotsTypes } from './types';
import { requestRobotsSuccess, requestRobotsFailed } from './actions';
import { callApi } from '../../api/api';

function* handleFetch() {
  try {
    const res = yield callApi('https://jsonplaceholder.typicode.com/users');

    if (res.error) {
      yield put(requestRobotsFailed(res.error));
    } else {
      yield put(requestRobotsSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(requestRobotsFailed(err.stack!));
    } else {
      yield put(requestRobotsFailed('An unknown error occured.'));
    }
  }
}

function* watchRequestRobotsPending() {
  yield takeEvery(RequestRobotsTypes.REQUEST_ROBOTS_PENDING, handleFetch);
}

export function* requestRobotsSaga() {
  yield all([fork(watchRequestRobotsPending)]);
}
