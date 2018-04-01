import * as types from './actionTypes';
import firebaseApi from '../firebase/firebaseApi';

export const authInitialized = user => (dispatch, getState, api) => {
 dispatch(authInitializedDone());
 if (user) {
  //dispatch(authLoggedInSuccess(user.uid));
 } else {
  dispatch(authLoggedOutSuccess());
 }
};

export function authInitializedDone() {
 return {
  type: types.AUTH_INITIALIZATION_DONE
 };
}

export function authLoggedInSuccess(userUID) {
 return {
  type: types.AUTH_LOGGED_IN_SUCCESS,
  payload: { userUID }
 };
}

export function authLoggedOutSuccess() {
 return { type: types.AUTH_LOGGED_OUT_SUCCESS };
}

export const SignInWithGoogle = () => (dispatch, getState, api) => {
 return firebaseApi.LoginWithGoogle().then(user => {
  user
   .getIdToken(true)
   .then(idToken => {
    api.post('/login', {
     token: idToken
    });
   })
   .then(response => {
    dispatch(authLoggedInSuccess(user.uid));
   })
   .catch(error => {});
  return user;
 });
};

export const LogOut = () => (dispatch, getState, api) => {
 firebaseApi.Logout().then(() => {
  api.post('/logout').then(() => {
   dispatch(authLoggedOutSuccess());
  });
 });
};
