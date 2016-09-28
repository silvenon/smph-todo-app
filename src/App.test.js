import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders without crashing', t => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
