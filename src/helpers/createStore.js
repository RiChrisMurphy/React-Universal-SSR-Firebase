import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { authLoggedInSuccess } from '../client/actions/authActions';
import reducers from '../client/reducers';

export default req => {
 const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { cookie: req.get('cookie') || '' }
 });

 const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
 );
 if (req.session.decodedToken) {
  store.dispatch(authLoggedInSuccess(req.session.decodedToken.user_id));
 }
 return store;
};
