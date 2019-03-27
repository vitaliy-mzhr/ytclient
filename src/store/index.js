import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}
