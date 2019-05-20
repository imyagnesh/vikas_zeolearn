import React, { PureComponent } from "react";

export default class index extends PureComponent {
  state = {
    courses: [],
    authors: []
  };

  constructor(props) {
    super(props);
    this.fetchCourses();
    this.fetchAuthors();
  }

  fetchCourses = async () => {
    const res = await fetch("http://localhost:3004/courses");
    const courses = await res.json();
    this.setState({ courses });
  };

  fetchAuthors = async () => {
    const res = await fetch("http://localhost:3004/authors");
    const authors = await res.json();
    this.setState({ authors });
  };

  renderAuthorName = id => {
    const { authors } = this.state;
    const author = authors.find(x => x.id === id);
    if (author) {
      return `${author.firstName} ${author.lastName}`;
    }
    return "";
  };

  render() {
    const { authors, courses } = this.state;
    return (
      <div>
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
                <tr>
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
