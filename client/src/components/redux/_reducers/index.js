import { combineReducers } from 'redux';
import authUserReducer from './user_reducer';

export default combineReducers({
  authUser: authUserReducer,
});
