/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

const courseList = ({ courses, deleteCourses, editRecord, renderAuthorName }) => (
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
      {courses.map(course => (
        <tr key={course.id}>
          <td>{course.title}</td>
          <td>
            <a href={course.watchHref}>Click Here</a>
          </td>
          <td>{renderAuthorName(course.authorId)}</td>
          <td>{course.length}</td>
          <td>{course.category}</td>
          <td>
            <button type="button" onClick={() => editRecord(course)}>
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
);

courseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourses: PropTypes.func.isRequired,
  editRecord: PropTypes.func.isRequired,
  renderAuthorName: PropTypes.func.isRequired,
};

export default courseList;
