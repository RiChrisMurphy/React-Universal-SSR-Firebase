import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function modalReducer(state = initialState.modalIsOpen, action) {
 switch (action.type) {
  case types.MODAL_TRIGGER_TRUE:
   return true;
  case types.MODAL_TRIGGER_FALSE:
   return false;
  default:
   return state;
 }
}
