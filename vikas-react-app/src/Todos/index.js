import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import FilterTodo from "./filterTodo";

class index extends Component {
  state = {
    todos: [],
    todoText: "",
    status: "all"
  };

  onChange = e => {
    this.setState({ todoText: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    const { todoText, todos } = this.state;
    this.setState({
      todos: [
        ...todos,
        { id: todos.length + 1, text: todoText, isDone: false }
      ],
      todoText: ""
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(x => x.id !== id)
    });
  };

  updateTodo = id => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === id);
    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todos[index], isDone: !todos[index].isDone },
        ...todos.slice(index + 1)
      ]
    });
  };

  changeStatus = status => {
    this.setState({ status });
  };

  render() {
    const { todoText, todos, status } = this.state;

    let data = todos;
    if (status === "pending") {
      data = todos.filter(x => !x.isDone);
    }
    if (status === "completed") {
      data = todos.filter(x => x.isDone);
    }

    return (
      <div
        style={{
          height: "100vh",
          flexDirection: "column",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <TodoForm
            todoText={todoText}
            submit={this.submit}
            onChange={this.onChange}
          />
          <TodoList
            data={data}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
        </div>
        <FilterTodo changeStatus={this.changeStatus} />
      </div>
    );
  }
}

index.propTypes = {};

export default index;
