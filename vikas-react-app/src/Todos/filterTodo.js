import React from "react";

const filterTodo = ({ changeStatus }) => {
  return (
    <div>
      <button
        style={{
          flexDirection: "row",
          flex: 1,
          height: 40
        }}
        onClick={() => changeStatus("all")}
      >
        All
      </button>
      <button
        style={{ flex: 1, height: 40 }}
        onClick={() => changeStatus("completed")}
      >
        Completed
      </button>
      <button
        style={{ flex: 1, height: 40 }}
        onClick={() => changeStatus("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default filterTodo;
