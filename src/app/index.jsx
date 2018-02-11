import 'rxjs';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Router from '../router';

const renderApp = (Component, { location = null, context = null, id = 'root' } = {}) => {
  const HMR = process.env.NODE_ENV !== 'production' ? AppContainer : Fragment;
  const ReactRouter = process.env.SSR ? StaticRouter : BrowserRouter;

  const AppComponent = (
    <Provider store={store}>
      <HMR>
        <ReactRouter location={location} context={context}>
          <Router>
            <Component />
          </Router>
        </ReactRouter>
      </HMR>
    </Provider>
  );

  return process.env.SSR ? AppComponent : setTimeout(() => {
    render(AppComponent, document.getElementById(id));
  }, 0);
};

export default renderApp;
