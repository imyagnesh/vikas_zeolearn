import React from "react";

const todoForm = ({ todoText, submit, onChange }) => {
  return (
    <form onSubmit={submit} style={{ alignSelf: "center" }}>
      <input type="text" value={todoText} onChange={onChange} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default todoForm;
