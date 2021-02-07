import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';
import {HomeReducer} from '../Features/Homepage/Redux/Reducer';
import {loginReducer} from '../Features/Login/Redux/Reducer';
import {registerReducer} from '../Features/Register/Redux/Reducer';
import {profileReducer} from '../Features/Profile/Redux/Reducer';

export const allReducer = combineReducers({
  GlobalReducer,
  HomeReducer,
  loginReducer,
  registerReducer,
  profileReducer,
});
