import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';
import {LoginReducer} from '../Features/Login/reducer';
import {HomeReducer} from '../Features/Homepage/reducer';

export const AllReducer = combineReducers({
  GlobalReducer,
  LoginReducer,
  HomeReducer,
});
