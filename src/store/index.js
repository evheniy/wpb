import { injectReducer, store } from './store';
import { injectEpic } from './epics';

const inject = (name, asyncReducer, asyncEpic$) => {
  injectReducer(name, asyncReducer);
  injectEpic(name, asyncEpic$);
};

export {
  store,
  injectReducer,
  injectEpic,
  inject,
};

export default store;
