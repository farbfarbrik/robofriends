import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { requestRobotsSaga } from './RequestRobots/sagas';

import { RequestRobotsReducer } from './RequestRobots/reducer';
import { RequestRobotsState } from './RequestRobots/types';

import { SearchFieldReducer } from './SearchField/reducer';
import { SearchFieldState } from './SearchField/types';

export interface ApplicationState {
  robots: RequestRobotsState;
  searchfield: SearchFieldState;
}

export const rootReducer = combineReducers<ApplicationState>({
  robots: RequestRobotsReducer,
  searchfield: SearchFieldReducer,
});

export function* rootSaga() {
  yield all([fork(requestRobotsSaga)]);
}
