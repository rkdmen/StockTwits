import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import rootReducer from "./reducers/index";
import createLogger from "redux-logger";
import promise from "redux-promise";

import routes from "./routes";

const logger = createLogger();

const store = createStore(
  combineReducers({
    reducer: rootReducer,
    routing: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise)
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
    </div>
  </Provider>,
  document.getElementById("app")
);
