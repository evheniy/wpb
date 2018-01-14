import React, { Fragment } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

export default ({ children }) => (
  <ConnectedRouter history={history}>
    <Fragment>
      {children}
    </Fragment>
  </ConnectedRouter>
);
