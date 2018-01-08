# Webpack Builder

Less chaos in React World

## How to install

    npm i -S wpb
    
## How to use 

### index.jsx

    import React, { Fragment } from 'react';
    import { app, Loadable } from 'wpb';
    import { Route } from 'react-router-dom';
    
    app(() => (
      <Fragment>
        <Route exact path="/" component={Loadable(import('./modules/home'))} />
        <Route path="/actions" component={Loadable(import('./modules/actions'))} />
      </Fragment>
    ));
    
### Module Example

    .
    ├── actions
    │   └── index.js
    ├── components
    │   ├── index.jsx
    │   └── style.scss
    ├── constants
    │   └── index.js
    ├── containers
    │   └── index.js
    ├── epics
    │   ├── index.js
    │   └── init.js
    ├── index.jsx
    └── reducers
        └── index.js

#### constants/index.js

    export const ACTIONS_INIT = 'ACTIONS_INIT';
    export const ACTIONS_IDLE = 'ACTIONS_IDLE';
    export const ACTIONS_CLEAR = 'ACTIONS_CLEAR';

#### actions/index.js

    import * as constants from '../constants';
    
    export const initActions = () => ({
      type: constants.ACTIONS_INIT,
    });
    
    export const idleActions = () => ({
      type: constants.ACTIONS_IDLE,
    });
    
    export const clearActions = () => ({
      type: constants.ACTIONS_CLEAR,
    });

#### components/index.jsx

    import React from 'react';
    import PropTypes from 'prop-types';
    import { CSSTransition, TransitionGroup } from 'react-transition-group';
    import Layout from '../../layout';
    import style from './style.scss';
    
    const classNames = {
      appear: style.appear,
      appearActive: style['appear-active'],
      enter: style.enter,
      enterActive: style['enter-active'],
      exit: style.exit,
      exitActive: style['exit-active'],
    };
    
    const transitionProps = {
      timeout: 1000,
      classNames,
    };
    
    const Component = ({ status, initActions, clearActions }) => (
      <Layout>
        <div>
          <h1>Status: {status}</h1>
          <TransitionGroup>
            {status !== 'idle' && (
              <CSSTransition {...transitionProps}>
                <button onClick={initActions}>Init</button>
              </CSSTransition>
            )}
            {status === 'idle' && (
              <CSSTransition {...transitionProps}>
                <button onClick={clearActions}>Clear</button>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </Layout>
    );
    
    Component.propTypes = {
      status: PropTypes.string.isRequired,
      initActions: PropTypes.func.isRequired,
      clearActions: PropTypes.func.isRequired,
    };
    
    export default Component;

#### components/style.scss

    .enter {
      opacity: 0;
    }
    
    .enter.enter-active {
      opacity: 0;
      transition: opacity 300ms ease-in;
    }
    
    .exit {
      opacity: 0;
    }
    
    .exit.exit-active {
      opacity:  0.01;
      transition: opacity 200ms ease-in;
    }
    
    .appear {
      opacity: 0;
    }
    
    .appear.appear-active {
      opacity: 0.01;
      transition: opacity 100ms ease-in;
    }

#### containers/index.js

    import { connect } from 'react-redux';
    import Component from '../components';
    import { initActions, clearActions } from '../actions';
    
    const mapStateToProps = state => ({ status: state.actions.status });
    const mapDispatchToProps = { initActions, clearActions };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Component);

#### reducers/index.js

    import * as constants from '../constants';
    
    const status = 'null';
    
    const defaultState = {
      status,
    };
    
    export default (state = defaultState, action) => {
      switch (action.type) {
        case constants.ACTIONS_INIT:
          return { ...state, status: 'init' };
        case constants.ACTIONS_IDLE:
          return { ...state, status: 'idle' };
        case constants.ACTIONS_CLEAR:
          return { ...state, status };
        default:
          return state;
      }
    };

#### epics/index.js

    import { combineEpics } from 'redux-observable';
    
    import initEpic from './init';
    
    export default combineEpics(initEpic);

#### epics/init.js

    import { ACTIONS_INIT } from '../constants';
    import { idleActions } from '../actions';
    
    export default action$ => action$.ofType(ACTIONS_INIT).mapTo(idleActions());

#### index.jsx

    import React from 'react';
    import { injectReducer, injectEpic } from 'wpb/lib/store';
    import Container from './containers';
    import redux from './reducers';
    import epics from './epics';
    
    injectEpic(epics);
    injectReducer('actions', redux);
    
    export default props => (
      <Container {...props} />
    );

