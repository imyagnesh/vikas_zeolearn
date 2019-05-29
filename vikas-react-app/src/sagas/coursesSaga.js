// eslint-disable-next-line object-curly-newline
import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

function* getCourses() {
  try {
    const url = 'http://localhost:3004/courses';
    const res = yield call(fetch, url);
    const courses = yield res.json();
    yield put({ type: `${types.FETCH}_${types.COURSES}_${types.SUCCESS}`, payload: courses });
  } catch (error) {
    yield put({ type: `${types.FETCH}_${types.COURSES}_${types.FAIL}`, payload: error });
  }
}

function* saveCourse({ payload }) {
  try {
    const url = 'http://localhost:3004/courses';
    const options = {
      method: payload.id ? 'PUT' : 'POST',
      body: JSON.stringify(payload),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const res = yield call(fetch, url, options);
    const course = yield res.json();
    yield put({ type: `${types.SAVE}_${types.COURSES}_${types.SUCCESS}`, payload: course });
  } catch (error) {
    yield put({ type: `${types.SAVE}_${types.COURSES}_${types.FAIL}`, payload: error });
  }
}

function* editCourse({ payload }) {
  try {
    const url = `http://localhost:3004/courses/${payload.id}`;
    const options = {
      method: payload.id ? 'PUT' : 'POST',
      body: JSON.stringify(payload),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const res = yield call(fetch, url, options);
    const course = yield res.json();
    yield put({ type: `${types.EDIT}_${types.COURSES}_${types.SUCCESS}`, payload: course });
  } catch (error) {
    yield put({ type: `${types.EDIT}_${types.COURSES}_${types.FAIL}`, payload: error });
  }
}

function* deleteCourse({ payload }) {
  try {
    const url = `http://localhost:3004/courses/${payload.id}`;
    const options = {
      method: 'DELETE',
    };
    yield call(fetch, url, options);
    yield put({ type: `${types.DELETE}_${types.COURSES}_${types.SUCCESS}`, payload });
  } catch (error) {
    yield put({ type: `${types.DELETE}_${types.COURSES}_${types.FAIL}`, payload: error });
  }
}

function* coursesRequest() {
  yield takeEvery(`${types.FETCH}_${types.COURSES}_${types.REQUEST}`, getCourses);
}

function* saveCourseRequest() {
  yield takeEvery(`${types.SAVE}_${types.COURSES}_${types.REQUEST}`, saveCourse);
}

function* editCourseRequest() {
  yield takeEvery(`${types.EDIT}_${types.COURSES}_${types.REQUEST}`, editCourse);
}

function* deleteCourseRequest() {
  yield takeEvery(`${types.DELETE}_${types.COURSES}_${types.REQUEST}`, deleteCourse);
}

export default function* init() {
  yield all([coursesRequest(), saveCourseRequest(), deleteCourseRequest(), editCourseRequest()]);
}
