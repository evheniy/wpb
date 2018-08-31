import { createEpicMiddleware, combineEpics, ofType } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { store } from './store';

const asyncEpics = {};

export const EPIC_REPLACING = '@@wpb/EPIC_REPLACING';

const getRootEpic = () => {
  const epic$ = new BehaviorSubject(combineEpics(...Object.values(asyncEpics)));

  return (action$, ...rest) => epic$.pipe(
    switchMap(epic => epic(action$, ...rest)),
    takeUntil(action$.pipe(
      ofType(EPIC_REPLACING),
    )),
  );
};

const rootEpic = getRootEpic();

const epicMiddleware = createEpicMiddleware();

if (process.env.NODE_ENV !== 'test') {
  epicMiddleware.run(rootEpic);
}

const injectEpic = (name, asyncEpic$) => {
  if (!['production', 'test'].includes(process.env.NODE_ENV)) {
    if (asyncEpics[name]) {
      console.log(`Replacing epic for ${name}`);
    } else {
      console.log(`Injecting epic for ${name}`);
    }
  }

  asyncEpics[name] = asyncEpic$;

  if (process.env.NODE_ENV !== 'test') {
    store.dispatch({ type: EPIC_REPLACING });
    epicMiddleware.run(getRootEpic());
  }
};

export { injectEpic, epicMiddleware };
