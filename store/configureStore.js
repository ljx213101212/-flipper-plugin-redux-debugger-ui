import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';
import modeReducer from '../reducers/modeReducer';
import createDebugger from './reduxFlipper';

const rootReducer = combineReducers({
  count: countReducer,
  mode: modeReducer,
});
const configureStore = () => {
  const middlewares = [
    /* other middlewares */
  ];

  if (__DEV__) {
    //const createDebugger = require('redux-flipper').default;
    middlewares.push(thunk, createDebugger(), logger);
  }
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  return store;
};
export default configureStore;
