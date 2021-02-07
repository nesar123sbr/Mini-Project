import {all} from 'redux-saga/effects';
import {HomeSaga} from '../Features/Homepage/Redux/Saga';
import {loginSaga} from '../Features/Login/Redux/Saga';
import {registerSaga} from '../Features/Register/Redux/Saga';
import {profileSaga} from '../Features/Profile/Redux/Saga';

export function* SagaWatcher() {
  yield all([HomeSaga(), loginSaga(), registerSaga(), profileSaga()]);
}
