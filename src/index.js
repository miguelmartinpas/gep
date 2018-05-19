import 'react-hot-loader/patch';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import firebase from 'firebase';
import createHistory from 'history/createBrowserHistory';
import ReduxPromise from 'redux-promise';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { basename, firebaseConfig } from './config';
import App from './components/App';

import reducers from './reducers';

firebase.initializeApp(firebaseConfig);

const history = createHistory();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, { userProfile: 'users' }),
  createEpicMiddleware(combineEpics([])),
  applyMiddleware(ReduxPromise)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  reducers
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

const renderApp = () => (
  <Provider store={store}>
    <Router basename={basename} history={history}>
      <App />
    </Router>
  </Provider>
);

const root = document.getElementById('root');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(renderApp(), root);
  });
}
