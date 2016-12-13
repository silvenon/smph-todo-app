import test from 'ava';
import { getTodos } from './selectors';

test('getTodos selector', t => {
  const todos = [
    { id: 1, completed: false, text: 'buy milk' },
    { id: 2, completed: false, text: 'walk the dog' },
    { id: 3, completed: false, text: 'study' }
  ];
  t.deepEqual(getTodos({ todos }), todos);
});
