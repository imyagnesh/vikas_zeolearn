import React, { Fragment } from "react";
import PropTypes from "prop-types";
import wrapper from "../HOC/wrapper";

const todoList = ({ data, updateTodo, deleteTodo }) => {
  // return (
  //   <Fragment>
  //     {data.map(item => (
  //       <div
  //         key={item.id}
  //         style={{
  //           display: "flex",
  //           margin: 10,
  //           alignItems: "center"
  //         }}
  //       >
  //         <input
  //           type="checkbox"
  //           value={item.isDone}
  //           onClick={() => updateTodo(item.id)}
  //         />
  //         <p
  //           style={{
  //             flex: 1,
  //             textDecoration: item.isDone ? "line-through" : "none"
  //           }}
  //         >
  //           {item.text}
  //         </p>
  //         <button onClick={() => logData(item.id)}>Delete</button>
  //       </div>
  //     ))}
  //   </Fragment>
  // );

  const data1 = data.map(item => (
    <div
      key={item.id}
      style={{
        display: "flex",
        margin: 10,
        alignItems: "center"
      }}
    >
      <input
        type="checkbox"
        value={item.isDone}
        onClick={() => updateTodo(item.id)}
      />
      <p
        style={{
          flex: 1,
          textDecoration: item.isDone ? "line-through" : "none"
        }}
      >
        {item.text}
      </p>
      <button
        onClick={() => deleteTodo(item.id, "Passing data from child to parent")}
      >
        Delete
      </button>
    </div>
  ));

  return data1;
};

todoList.propTypes = {
  data: PropTypes.array,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

todoList.defaultProps = {
  data: [{ id: 1, text: "get Milk1", isDone: false }]
};

export default wrapper(todoList);
