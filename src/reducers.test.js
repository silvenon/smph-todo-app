import test from 'ava';
import { todos } from './reducers';
import { toggleTodo } from './actions';

test('todos reducer', t => {
  t.deepEqual(todos([
    { id: 0, completed: false },
    { id: 1, completed: false },
    { id: 2, completed: false }
  ], toggleTodo(1)), [
    { id: 0, completed: false },
    { id: 1, completed: true }, // <-- this one should be toggled
    { id: 2, completed: false }
  ]);
});
