import React, { Component, StrictMode } from "react";
import PropTypes from "prop-types";
import Todos from "./Todos";

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    text: "get milk"
  };

  // state = {
  //   a: 1,
  //   greet: this.props.text,
  //   show: false
  // };

  // constructor(props) {
  //   super(props);
  //   const b = 1;
  //   this.state = {
  //     a: 1,
  //     greet: `${props.text}${b}`
  //   };
  // }

  // static getDerivedStateFromProps(props, state) {
  //   const b = 1;
  //   return { ...state, greet: `${props.text}${b}` };
  // }

  render() {
    // const { a, greet, show } = this.state;

    return (
      <StrictMode>
        <div>
          {/* <button
          onClick={() => {
            this.setState({ text: "get food" });
          }}
        >
          Change Text
        </button> */}
          <Todos text={this.state.text} />

          {/* <p> {`Hello${this.state.a}`}</p>
        {show && <p> {greet}</p>}
        <button onClick={() => this.setState({ a: a + 1 })}>Click Me</button>
        <button
          onClick={() => {
            this.setState({ show: !show });
          }}
        >
          Show Text
        </button> */}
        </div>
      </StrictMode>
    );
  }
}
