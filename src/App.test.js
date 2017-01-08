import test from 'ava';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore();
const initialState = { todos: [] };

test('renders without crashing', t => {
  const store = mockStore(initialState);
  mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
