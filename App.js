import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import StackReducer from './src/state/stack/reducer';
import Main from './src/containers/Main';

const store = createStore(StackReducer);

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
