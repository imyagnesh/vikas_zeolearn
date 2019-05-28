import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import About from '../About/about';
// import { ThemeConsumer } from '../../App';

export default class index extends PureComponent {
  static propTypes = {
    saveCourses: PropTypes.func.isRequired,
    deleteCourses: PropTypes.func.isRequired,
    fetchAuthors: PropTypes.func.isRequired,
    fetchCourses: PropTypes.func.isRequired,
    courses: PropTypes.object.isRequired,
    authors: PropTypes.object.isRequired,
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
    const {
      authors: { data },
    } = this.props;
    const author = data.find(x => x.id === id);
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
    const {
      courses: { loading, data, error },
      authors: { data: authorsData },
      saveCourses,
      deleteCourses,
    } = this.props;
    const { course: crs, open } = this.state;
    if (loading) {
      return <h1>Loading....</h1>;
    }
    if (error) {
      return <h1>Error....</h1>;
    }

    return (
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
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Author</th>
              <th>Length</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>
                  <a href={course.watchHref}>Click Here</a>
                </td>
                <td>{this.renderAuthorName(course.authorId)}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
                <td>
                  <button type="button" onClick={() => this.editRecord(course)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteCourses(course)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {crs && open && (
          <dialog open>
            <About
              onClose={() => {
                this.setState({ open: false });
              }}
              course={crs}
              saveAuthors={saveCourses}
              authorsData={authorsData}
            />
          </dialog>
        )}
      </div>
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
