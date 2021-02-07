import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';
import {HomeReducer} from '../Features/Homepage/Redux/Reducer';
import {loginReducer} from '../Features/Login/Redux/Reducer';
import {registerReducer} from '../Features/Register/Redux/Reducer';

export const allReducer = combineReducers({
  GlobalReducer,
  HomeReducer,
  loginReducer,
  registerReducer,
});
