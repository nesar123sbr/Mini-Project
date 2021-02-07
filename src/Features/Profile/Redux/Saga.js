import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {Store} from '../../../Store/Store';
import jwt from 'jwt-decode';

function* putProfile(payload) {
  try {
    console.log('testxxxxxxxxxxxxxxxxxxxxx');
    const body = {
      name: payload.name,
      username: payload.username,
      email: payload.email,
      password: payload.password,
    };
    console.log(body, 'ini body');
    const token = Store.getState().loginReducer.token;
    const headers = {
      Authorization: token,
    };
    const respond = yield axios.put(
      'https://movie-review-team-a.herokuapp.com/api/signin/user/update',
      body,
      {headers: headers},
    );
    if (respond.data.token) {
      const credential = jwt(respond.data.token);
      yield put({
        type: 'SET_CREDENTIAL',
        email: payload.email,
        token: respond.data.token,
        name: credential.userExist.name,
        username: credential.userExist.username,
      });
    }
    yield put({
      type: 'SET_PROFILE',
      name: payload.name,
      username: payload.username,
      email: payload.email,
      password: payload.password,
    });
    console.log(respond, 'respond register');
  } catch (error) {
    console.log(error);
  }
}

// function* doneProfile(payload) {
//   try {
//     const body = {
//       name: payload.name,
//       username: payload.username,
//       email: payload.email,
//       password: payload.password,
//     };
//     const token = useSelector((state) => state.loginReducer.token);
//     const headers = {
//       Authorization: token,
//     };
//     const respond = yield axios.post(
//       'https://movie-review-team-a.herokuapp.com/api/signin/user/update',
//       body,
//       {headers: headers},
//     );
//     yield get({
//       type: 'SET_PROFILE',
//       name: payload.name,
//       username: payload.username,
//       email: payload.email,
//       password: payload.password,
//     });
//     console.log('after nav');
//     console.log(respond, 'respond register');
//   } catch (error) {
//     console.log(error);
//   }
// }

export function* profileSaga() {
  yield takeEvery('PUT_PROFILE', putProfile);
  // yield takeEvery('GET_PROFILE', doneProfile);
}
