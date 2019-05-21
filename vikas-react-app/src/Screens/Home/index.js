import React, { PureComponent } from "react";

export default class index extends PureComponent {
  state = {
    courses: [],
    authors: [],
    loading: false,
    error: false
  };

  // constructor(props) {
  //   super(props);
  //   // this.fetchData();
  //   // this.fetchCourses();
  //   // this.fetchAuthors();
  // }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      setTimeout(async () => {
        const resCourses = fetch("http://localhost:3004/courses");
        const resAuthors = fetch("http://localhost:3004/authors");
        const data = await Promise.all([resCourses, resAuthors]);
        const json = await Promise.all([data[0].json(), data[1].json()]);
        this.setState({ courses: json[0], authors: json[1], loading: false });
      }, 1000);
    } catch (error) {
      this.setState({ error: error, loading: false });
    }
  };

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
    const { authors } = this.state;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return "";
  };

  addRecord = () => {
    console.log(this.props);
    const { history } = this.props;
    history.push("/about", {
      data: "hello"
    });
  };

  render() {
    const { authors, courses, loading, error } = this.state;

    if (loading) {
      return <h1>Loading....</h1>;
    }
    if (error) {
      return <h1>Error....</h1>;
    }
    return (
      <div>
        <button onClick={this.addRecord}>Add Record</button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Author</th>
              <th>Length</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.length > 0 &&
              courses.map(course => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>
                    <a href={course.watchHref}>Click Here</a>
                  </td>
                  <td>{this.renderAuthorName(course.authorId)}</td>
                  <td>{course.length}</td>
                  <td>{course.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
