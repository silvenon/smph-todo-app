import test from 'ava';
import { toggleTodo, TOGGLE_TODO } from './actions';

test('toggleTodo action', t => {
  t.deepEqual(toggleTodo(1), {
    type: TOGGLE_TODO,
    payload: 1
  });
});
