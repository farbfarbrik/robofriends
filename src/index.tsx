import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import './index.css';
import App from './containers/App';
import { Store } from 'redux';
import { ApplicationState } from './store';

const store: Store<ApplicationState> = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
