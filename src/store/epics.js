import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const asyncEpics = {};

const getRootEpic = () => {
  const epic$ = new BehaviorSubject(combineEpics(...Object.values(asyncEpics)));

  return (action$, store) => epic$.mergeMap(epic => epic(action$, store));
};

const rootEpic = getRootEpic();

const epicMiddleware = createEpicMiddleware(rootEpic);

const injectEpic = (name, asyncEpic$) => {
  /* eslint-disable no-console */
  if (!['production', 'test'].includes(process.env.NODE_ENV)) {
    if (asyncEpics[name]) {
      console.log(`Replacing epic for ${name}`);
    } else {
      console.log(`Injecting epic for ${name}`);
    }
  }
  /* eslint-enable */

  asyncEpics[name] = asyncEpic$;

  epicMiddleware.replaceEpic(getRootEpic());
};

export { injectEpic, epicMiddleware };
