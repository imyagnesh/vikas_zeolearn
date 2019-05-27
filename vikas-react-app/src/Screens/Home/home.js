import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../App';

export default class index extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    fetchAuthors: PropTypes.func.isRequired,
    fetchCourses: PropTypes.func.isRequired,
    courses: PropTypes.object.isRequired,
    authors: PropTypes.object.isRequired,
  };

  state = {
    courses: [],
    authors: [],
  };

  constructor(props) {
    super(props);
    const { fetchAuthors, fetchCourses } = props;
    fetchAuthors();
    fetchCourses();
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
    console.log(this.props);
    const { history } = this.props;
    const { authors } = this.state;
    history.push('/about', {
      course: {
        title: '',
        courseURL: '',
        length: '',
        category: '',
        country: '',
        state: '',
      },
      authors,
    });
  };

  editRecord = course => {
    const { history } = this.props;
    const { authors } = this.state;
    history.push('/about', {
      course,
      authors,
    });
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
    } = this.props;
    if (loading) {
      return <h1>Loading....</h1>;
    }
    if (error) {
      return <h1>Error....</h1>;
    }

    return (
      <div>
        <ThemeConsumer>
          {value => (
            <button type="button" onClick={this.addRecord}>
              {value}
            </button>
          )}
        </ThemeConsumer>
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
                  <button type="button" onClick={() => this.deleteRecord(course)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
