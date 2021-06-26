import { createStore, combineReducers, applyMiddleware } from "redux";
import countReducer from "../reducers/countReducer";

const rootReducer = combineReducers({ count: countReducer });
const configureStore = () => {
  const middlewares = [
    /* other middlewares */
  ];

  if (__DEV__) {
    const createDebugger = require("redux-flipper").default;
    middlewares.push(createDebugger());
  }
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
};
export default configureStore;
