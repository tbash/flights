import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css/sanitize.css';
import configureStore from './store';

const store = configureStore();

import App from './containers/App';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
