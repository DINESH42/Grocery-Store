import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./Reducers/RootReducer";
import createSagaMiddleware from "redux-saga";

const middleware = createSagaMiddleware();

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(middleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ &&
    process.env.REACT_APP_ENV !== "production"
      ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
      : [])
  )
);
