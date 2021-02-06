import {all} from 'redux-saga/effects';
import {HomeSaga} from '../Features/Homepage/Redux/Saga';

export function* SagaWatcher() {
  yield all([HomeSaga()]);
}
