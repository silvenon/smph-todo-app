import { TOGGLE_TODO } from './actions';
import { combineReducers } from 'redux';

export const todos = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(t => {
        if (t.id === action.payload) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    default:
      return state;
  }
};

export default combineReducers({ todos });
