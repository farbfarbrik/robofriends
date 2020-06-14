import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import configureStore from './configureStore';
import App from './containers/App';
import { ApplicationState } from './store';

const store: Store<ApplicationState> = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
