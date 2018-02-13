import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { epicMiddleware } from './epics';
import createReducer from './reducers';
import history from '../history';

const middlewares = [epicMiddleware, routerMiddleware(history), thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const storeParams = [
  createReducer(),
  window.STATE_FROM_SERVER || {},
  composeEnhancers(applyMiddleware(...middlewares), offline(offlineConfig)),
];

const store = createStore(...storeParams);

const asyncReducers = {};

const injectReducer = (name, asyncReducer) => {
  /* eslint-disable no-console */
  if (process.env.NODE_ENV !== 'production') {
    if (asyncReducers[name]) {
      console.log(`Replacing reducer for ${name}`);
    } else {
      console.log(`Injecting reducer for ${name}`);
    }
  }
  /* eslint-enable */

  asyncReducers[name] = asyncReducer;

  store.replaceReducer(createReducer(asyncReducers));
};

export { store, injectReducer };
