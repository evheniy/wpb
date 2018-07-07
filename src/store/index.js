import { injectReducer, store } from './store';
import { injectEpic, EPIC_REPLACING } from './epics';

const inject = (name, asyncReducer, asyncEpic$) => {
  injectReducer(name, asyncReducer);
  injectEpic(name, asyncEpic$);
};

export {
  store,
  injectReducer,
  injectEpic,
  inject,
  EPIC_REPLACING,
};

export default store;
