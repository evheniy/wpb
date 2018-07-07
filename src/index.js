import history from './history';
import {
  store,
  injectReducer,
  injectEpic,
  inject,
  EPIC_REPLACING,
} from './store';
import app from './app';
import router from './router';

export {
  history,
  store,
  injectReducer,
  injectEpic,
  inject,
  app,
  router,
  EPIC_REPLACING,
};
