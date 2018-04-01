import { FETCH_STOCK_DATA } from '../actions';
import initialState from './initialState';

export default function stockReducer(state = initialState.stockdata, action) {
 switch (action.type) {
  case FETCH_STOCK_DATA:
   return action.payload.data;
  default:
   return state;
 }
}

