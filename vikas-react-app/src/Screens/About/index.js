import { connect } from 'react-redux';
import about from './about';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  saveAuthors: payload => dispatch({ type: 'SAVE_COURSES_REQUEST', payload }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(about);
