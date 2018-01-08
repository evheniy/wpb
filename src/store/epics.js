import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const epic$ = new BehaviorSubject(combineEpics());

const rootEpic = (action$, store) => epic$.mergeMap(epic => epic(action$, store));

const epicMiddleware = createEpicMiddleware(rootEpic);

const injectEpic = asyncEpic$ => epic$.next(asyncEpic$);

export { injectEpic, epicMiddleware };
