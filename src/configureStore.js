import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  const middleware = [
    // add common middleware
  ].concat(process.env.NODE_ENV === 'development' ? [
    // add development middleware
    createLogger()
  ] : []);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return store
}
