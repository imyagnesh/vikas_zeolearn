import React from "react";
import wrapper from "../HOC/wrapper";

const todoForm = ({ todoText, submit, onChange }) => {
  return (
    <form onSubmit={submit} style={{ alignSelf: "center" }}>
      <input type="text" value={todoText} onChange={onChange} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default wrapper(todoForm);
