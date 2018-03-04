import 'rxjs';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { ErrorBoundary, FallbackView } from 'react-error-boundaries';
import { StaticRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Router from '../router';

const isSSR = ssr => Object.keys(ssr).length === 0;

const renderApp = (Component, { ssr = {}, render = {}, error = {} } = {}) => {
  const ReactRouter = isSSR(ssr) ? StaticRouter : BrowserRouter;
  const RouterWrapper = isSSR(ssr) ? Fragment : Router;
  const { location, context } = ssr;
  const { id } = render;
  const { onError, FallbackComponent } = error;
  const ErrorComponent = process.env.NODE_ENV === 'production' ? FallbackComponent : FallbackView;

  const AppComponent = (
    <ErrorBoundary onError={onError} FallbackComponent={ErrorComponent}>
      <Provider store={store}>
        <ReactRouter location={location} context={context}>
          <RouterWrapper>
            <Component />
          </RouterWrapper>
        </ReactRouter>
      </Provider>
    </ErrorBoundary>
  );

  if (id) {
    setTimeout(() => {
      ReactDOM.render(AppComponent, document.getElementById(id));
    }, 0);
  }

  return hot(module)(AppComponent);
};

export default renderApp;
