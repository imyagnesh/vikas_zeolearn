import React from "react";
import PropTypes from "prop-types";

const todoList = ({ data, updateTodo, deleteTodo }) => {
  return (
    <div>
      {data.map(item => (
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
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

todoList.propTypes = {};

export default todoList;
