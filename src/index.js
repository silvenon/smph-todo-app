import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import configureStore from './configureStore';
import { toggleTodo } from './actions';

const store = configureStore({
  todos: [
    { id: 0, completed: false, text: 'buy milk' },
    { id: 1, completed: false, text: 'walk the dog' },
    { id: 2, completed: false, text: 'study' }
  ]
});

store.dispatch(toggleTodo(1));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
