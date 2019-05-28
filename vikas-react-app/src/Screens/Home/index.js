import { connect } from 'react-redux';
import home from './home';

const mapStateToProps = state => ({
  authors: state.authors,
  courses: state.courses,
});

const mapDispatchToProps = dispatch => ({
  fetchAuthors: () => dispatch({ type: 'FETCH_AUTHORS_REQUEST' }),
  fetchCourses: () => dispatch({ type: 'FETCH_COURSES_REQUEST' }),
  saveCourses: payload => dispatch({ type: 'SAVE_COURSES_REQUEST', payload }),
  deleteCourses: payload => dispatch({ type: 'DELETE_COURSES_REQUEST', payload }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
