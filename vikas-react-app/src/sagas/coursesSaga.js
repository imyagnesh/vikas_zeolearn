// eslint-disable-next-line object-curly-newline
import { all, takeEvery, call, put } from 'redux-saga/effects';

function* getCourses() {
  try {
    const url = 'http://localhost:3004/courses';
    const res = yield call(fetch, url);
    const courses = yield res.json();
    yield put({ type: 'FETCH_COURSES_SUCCESS', payload: courses });
  } catch (error) {
    yield put({ type: 'COURSES_FAIL', payload: error });
  }
}

function* saveCourse({ payload }) {
  try {
    let url = 'http://localhost:3004/courses';
    if (payload.id) {
      url = `http://localhost:3004/courses/${payload.id}`;
    }
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
    if (payload.id) {
      yield put({ type: 'EDIT_COURSES_SUCCESS', payload: course });
    } else {
      yield put({ type: 'SAVE_COURSES_SUCCESS', payload: course });
    }
  } catch (error) {
    yield put({ type: 'COURSES_FAIL', payload: error });
  }
}

function* deleteCourse({ payload }) {
  try {
    const url = `http://localhost:3004/courses/${payload.id}`;
    const options = {
      method: 'DELETE',
    };
    yield call(fetch, url, options);
    yield put({ type: 'DELETE_COURSES_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'COURSES_FAIL', payload: error });
  }
}

function* coursesRequest() {
  yield takeEvery('FETCH_COURSES_REQUEST', getCourses);
}

function* saveCourseRequest() {
  yield takeEvery('SAVE_COURSES_REQUEST', saveCourse);
}

function* deleteCourseRequest() {
  yield takeEvery('DELETE_COURSES_REQUEST', deleteCourse);
}

export default function* init() {
  yield all([coursesRequest(), saveCourseRequest(), deleteCourseRequest()]);
}
