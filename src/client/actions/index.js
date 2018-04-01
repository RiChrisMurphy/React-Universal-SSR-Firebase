import * as types from './actionTypes';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async (dispatch, getState, api) => {
 const res = await api.get('/users');
 dispatch({
  type: FETCH_USERS,
  payload: res
 });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
 const res = await api.get('/current_user');
 dispatch({
  type: FETCH_CURRENT_USER,
  payload: res
 });
};

export const FETCH_ADMINS = 'fetch_admins';

export const fetchAdmins = () => async (dispatch, getState, api) => {
 const res = await api.get('/admins');
 dispatch({
  type: FETCH_ADMINS,
  payload: res
 });
};

export const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';

export const fetchStockData = () => async (dispatch, getState, api) => {
 const res = await api.get('/stockdata');
 dispatch({
  type: FETCH_STOCK_DATA,
  payload: res
 });
};

export const ModalTrigger = trigger => (dispatch, getState, api) => {
 console.log(trigger, 'trigger at modalTrigger');
 if (trigger) {
  return dispatch({
   type: types.MODAL_TRIGGER_TRUE,
   payload: trigger
  });
 }
 return dispatch({
  type: types.MODAL_TRIGGER_FALSE,
  payload: trigger
 });
};
