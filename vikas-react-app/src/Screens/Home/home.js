/* eslint-disable object-curly-newline */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import About from '../About/about';
import ErrorBoundary from '../../Components/ErrorBoundary';
import CourseList from './courseList';
// import { ThemeConsumer } from '../../App';

export default class index extends PureComponent {
  static propTypes = {
    saveCourses: PropTypes.func.isRequired,
    deleteCourses: PropTypes.func.isRequired,
    fetchAuthors: PropTypes.func.isRequired,
    fetchCourses: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    editCourse: PropTypes.func.isRequired,
  };

  state = {
    courses: [],
    course: {
      title: '',
      courseURL: '',
      length: '',
      category: '',
      country: '',
      state: '',
    },
    open: false,
  };

  constructor(props) {
    super(props);
    const { fetchAuthors, fetchCourses } = props;
    fetchAuthors();
    fetchCourses();
  }

  renderAuthorName = id => {
    const { authors } = this.props;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return '';
  };

  addRecord = () => {
    this.setState({
      course: {
        title: '',
        courseURL: '',
        length: '',
        category: '',
        country: '',
        state: '',
      },
      open: true,
    });
    // console.log(this.props);
    // const {
    //   history,
    //   authors: { data },
    // } = this.props;
    // history.push('/about', {
    //   course: {
    //     title: '',
    //     courseURL: '',
    //     length: '',
    //     category: '',
    //     country: '',
    //     state: '',
    //   },
    //   authors: data,
    // });
  };

  editRecord = course => {
    this.setState({
      course,
      open: true,
    });
    // const {
    //   history,
    //   authors: { data },
    // } = this.props;
    // history.push('/about', {
    //   course,
    //   authors: data,
    // });
  };

  deleteRecord = async course => {
    try {
      await fetch(`http://localhost:3004/courses/${course.id}`, {
        method: 'DELETE',
      });
      this.setState(state => ({
        courses: state.courses.filter(item => item.id !== course.id),
      }));
    } catch (error) {
      //   this.setState({ error });
    }
  };

  render() {
    const { courses, authors, saveCourses, deleteCourses, loading, editCourse } = this.props;
    const { course: crs, open } = this.state;
    if (loading) {
      return <h1>Loading....</h1>;
    }
    // if (error) {
    //   return <h1>Error....</h1>;
    // }

    return (
      <ErrorBoundary>
        <div>
          {/* <ThemeConsumer>
          {value => (
            <button type="button" onClick={this.addRecord}>
              {value}
            </button>
          )}
        </ThemeConsumer> */}

          <button type="button" onClick={this.addRecord}>
            Add Button
          </button>
          <CourseList
            courses={courses}
            deleteCourses={deleteCourses}
            editRecord={this.editRecord}
            renderAuthorName={this.renderAuthorName}
          />
          {crs && open && (
            <dialog open>
              <About
                onClose={() => {
                  this.setState({ open: false });
                }}
                course={crs}
                saveAuthors={value => (value.id ? editCourse(value) : saveCourses(value))}
                authorsData={authors}
              />
            </dialog>
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

//   fetchData = async () => {
//     this.setState({ loading: true });
//     try {
//       setTimeout(async () => {
//         const resCourses = fetch('http://localhost:3004/courses');
//         const resAuthors = fetch('http://localhost:3004/authors');
//         const data = await Promise.all([resCourses, resAuthors]);
//         const json = await Promise.all([data[0].json(), data[1].json()]);
//         this.setState({ courses: json[0], authors: json[1], loading: false });
//       }, 1000);
//     } catch (error) {
//       this.setState({ error, loading: false });
//     }
//   };

// fetchCourses = async () => {
//   const res = await fetch("http://localhost:3004/courses");
//   const courses = await res.json();
//   this.setState({ courses });
// };

// fetchAuthors = async () => {
//   const res = await fetch("http://localhost:3004/authors");
//   const authors = await res.json();
//   this.setState({ authors });
// };
