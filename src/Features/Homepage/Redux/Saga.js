import {all, takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

function* getGenresSaga() {
  try {
    const respond = yield axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=781eb13279207d3b00115859616b4710 ',
    );

    console.log(respond);
  } catch (error) {
    console.log(error);
  }
}

export function* HomeSaga() {
  yield takeLatest('FETCH_GENRES', getGenresSaga);
}
