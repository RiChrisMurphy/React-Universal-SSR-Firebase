import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import modalReducer from './modalReducer';
import stockReducer from './stockReducer';
export default combineReducers({
 auth: authReducer,
 isModalOpen: modalReducer,
 stockData: stockReducer
});
