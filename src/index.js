import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import configureStore, { history } from './store'
import './index.scss';

const store = configureStore()

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}


