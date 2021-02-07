import {all, takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

function* getGenresSaga() {
  try {
    const respond = yield axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=781eb13279207d3b00115859616b4710 ',
    );
    console.log(respond);
    const allGenres = respond.data.genres;
    yield put({type: 'SET_GENRES', payload: allGenres});
  } catch (error) {
    console.log(error);
  }
}

function* getMovies() {
  try {
    const respond = yield axios.get(
      'https://movie-review-team-a.herokuapp.com/api/movies',
    );
    const allMovies = respond.data.data;
    yield put({type: 'SET_MOVIES', payload: allMovies});
  } catch (error) {
    console.log(error);
  }
}

export function* HomeSaga() {
  yield takeLatest('FETCH_GENRES', getGenresSaga);
  yield takeLatest('FETCH_MOVIES', getMovies);
}
