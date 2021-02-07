import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import {navigate} from '../../../Utils/Nav';
import axios from 'axios';
// import {setNavigate} from '../../../Store/GlobalAction';

function* postRegister(payload) {
  try {
    const body = {
      name: payload.name,
      username: payload.username,
      email: payload.email,
      password: payload.password,
    };
    const respond = yield axios.post(
      'https://movie-review-team-a.herokuapp.com/api/signup',
      body,
    );
    yield put({
      type: 'SET_REGISTER',
      name: payload.name,
      username: payload.username,
      email: payload.email,
      password: payload.password,
    });
    yield put(navigate('Login', {}));
    console.log('after nav');
    console.log(respond, 'respond register');
  } catch (error) {
    console.log(error);
  }
}

export function* registerSaga() {
  yield takeEvery('POST_REGISTER', postRegister);
}
