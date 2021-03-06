import React , {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import {createStore} from 'redux';
import builder from 'focus-graph/store/builder'
import Root from './root';
import reducer from './reducer'
import configureStore from './store';
const store = configureStore();
const renderApp = RootComponent => {
  console.info('App rendered')
  ReactDOM.render(
    <AppContainer>
      <RootComponent store={store} />
    </AppContainer>,
    document.querySelector('.focus-graph-demo-app')
  );
}

renderApp(Root);

if (module.hot) {

//   module.hot.decline('./routes.js');
  module.hot.accept('./root', () => {
    console.log('Root change')

    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRoot = require('./root');
    renderApp(NextRoot);
  });
}
