import {all} from 'redux-saga/effects';
import {LoginSaga} from '../Features/Login/LoginSaga';
import {HomeSaga} from '../Features/Homepage/HomeSaga';

export function* SagaWatcher() {
  yield all(LoginSaga, HomeSaga);
}
