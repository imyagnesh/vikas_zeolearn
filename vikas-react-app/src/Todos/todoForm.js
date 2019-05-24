import React from 'react';
import PropTypes from 'prop-types';
import wrapper from '../HOC/wrapper';

const todoForm = ({ todoText, submit, onChange }) => (
  <form onSubmit={submit} style={{ alignSelf: 'center' }}>
    <input type="text" value={todoText} onChange={onChange} />
    <input type="submit" value="Add Todo" />
  </form>
);

todoForm.propTypes = {
  todoText: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default wrapper(todoForm);
