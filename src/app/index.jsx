import 'rxjs';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { store } from '../store';
import Router from '../router';

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Component />
        </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

export default renderApp;
