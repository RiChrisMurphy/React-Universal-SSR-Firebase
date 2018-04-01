// client start
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import FirebaseApi from './firebase/FirebaseApi';
import { authInitialized } from './actions/authActions';
import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.5)';

const axiosInstance = axios.create({
 baseURL: '/api'
});
const preloadedState = window.INITIAL_STATE;
// Allow the passed state to be garbage-collected
delete window.INITIAL_STATE;
const store = createStore(
 reducers,
 preloadedState,
 applyMiddleware(thunk.withExtraArgument(axiosInstance))
);
FirebaseApi.initAuth().then(user => {
 store.dispatch(authInitialized(user));
 ReactDOM.hydrate(
  <Provider store={store}>
   <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
   </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
 );
});
