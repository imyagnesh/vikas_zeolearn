/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './todoForm';
import TodoList from './todoList';
import FilterTodo from './filterTodo';
import ErrorBoundary from '../ErrorBoundary';

class index extends PureComponent {
  state = {
    todos: [],
    todoText: '',
    status: 'all',
    error: false,
  };

  constructor(props) {
    super(props);
    console.log('constructor');
    this.getData();
  }

  // copyData = () => {
  //   console.log("copy");
  // };

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");

  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
  //     return true;
  //   }
  //   return false;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return 1;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(snapshot);
  //   if (prevState.todoText !== this.state.todoText) {
  //   }
  //   console.log("componentDidUpdate");
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("copy", this.copyData);
  // }

  // componentDidMount() {
  //   this.inputText.focus();
  //   document.addEventListener("copy", this.copyData);
  //   console.log("componentDidMount");
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps");
  //   this.setState({ todoText: nextProps.text });
  // }

  // static getDerivedStateFromError(error) {
  //   return {
  //     error: true
  //   };
  // }

  // componentDidCatch(error, info) {}

  componentWillMount() {}

  getData = async () => {
    const res = await fetch('http://localhost:3004/todos');
    const todos = await res.json();
    this.setState({ todos });
  };

  onChange = e => {
    this.setState({ todoText: e.target.value });
  };

  submit = async e => {
    try {
      e.preventDefault();
      const { todoText, todos } = this.state;
      const newTodo = { text: todoText, isDone: false };

      const res = await fetch('http://localhost:3004/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const todo = await res.json();

      this.setState({
        todos: [...todos, todo],
        todoText: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteTodo = async (id, info) => {
    console.log(info);
    const { todos } = this.state;
    const res = await fetch(`http://localhost:3004/todos/${id}`, {
      method: 'DELETE',
    });
    this.setState({
      todos: todos.filter(x => x.id !== id),
    });
  };

  updateTodo = async id => {
    try {
      const { todos } = this.state;
      const index = todos.findIndex(x => x.id === id);
      const updatedTodo = { ...todos[index], isDone: !todos[index].isDone };

      const res = await fetch(`http://localhost:3004/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTodo),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const todo = await res.json();

      this.setState({
        todos: [...todos.slice(0, index), todo, ...todos.slice(index + 1)],
      });
    } catch (error) {
      new Error('Put API failed');
    }
  };

  changeStatus = status => {
    this.setState({ status });
  };

  render() {
    console.log('render');
    const { todoText, todos, status } = this.state;

    let data = todos;
    if (status === 'pending') {
      data = todos.filter(x => !x.isDone);
    }
    if (status === 'completed') {
      data = todos.filter(x => x.isDone);
    }

    console.log(this.props.isOnline);
    return (
      <ErrorBoundary>
        <div
          style={{
            height: '100vh',
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {/* <input
          ref={ref => {
            this.inputText = ref;
          }}
          type="text"
        /> */}
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <TodoForm todoText={todoText} submit={this.submit} onChange={this.onChange} />
            <TodoList data={data} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          </div>
          <FilterTodo changeStatus={this.changeStatus} />
        </div>
      </ErrorBoundary>
    );
  }
}

index.propTypes = {};

export default index;
