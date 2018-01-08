import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

export default ({ children }) => (
  <ConnectedRouter history={history}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </ConnectedRouter>
);
