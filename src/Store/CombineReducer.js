import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';
import {HomeReducer} from '../Features/Homepage/Redux/Reducer';

export const allReducer = combineReducers({
  GlobalReducer,
  HomeReducer,
});
