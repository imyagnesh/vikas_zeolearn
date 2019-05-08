import React, { Component } from "react";
import PropTypes from "prop-types";
import * as xyz from "./appStyle";

export default class App extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  };

  render() {
    const { text, body } = this.props;
    console.log(xyz.a);
    return (
      <div>
        <p>{text}</p>
        <p>{body}</p>
      </div>
    );
  }
}
