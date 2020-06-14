import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { ApplicationState, rootReducer, rootSaga } from './store';

export default function configureStore(): Store<ApplicationState> {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
