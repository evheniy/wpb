import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

const Router = ({ children }) => (
  <ConnectedRouter history={history}>
    <Fragment>
      {children}
    </Fragment>
  </ConnectedRouter>
);

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Router;
