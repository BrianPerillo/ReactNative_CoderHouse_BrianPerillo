import MainNavigator from './navigation'
import { Provider } from 'react-redux'
import React from 'react';
import {delte_table} from './db';
import { init } from './db';
import store from './store'

// delte_table();

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err.message)
  });

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
