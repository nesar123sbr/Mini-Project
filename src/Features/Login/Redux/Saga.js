import {all, takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import {Alert} from 'react-native';
import {navigate} from '../../../Utils/Nav';

function* postLogin(payload) {
  try {
    const body = {
      email: payload.email,
      password: payload.password,
    };
    const respond = yield axios.post(
      'https://movie-review-team-a.herokuapp.com/api/signin',
      body,
    );

    if (respond.data.token) {
      yield put({
        type: 'SET_CREDENTIAL',
        email: payload.email,
        token: respond.data,
      });

      yield put(navigate('Main', {}));
      console.log(respond, 'respon login');
    } else {
      Alert.alert('Authentication', 'Wrong username/password');
    }
  } catch (error) {
    console.log(error);
  }
}

export function* loginSaga() {
  yield takeLatest('POST_LOGIN', postLogin);
}
