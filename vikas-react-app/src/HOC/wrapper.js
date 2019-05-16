import React, { Component } from "react";
import PropTypes from "prop-types";

export default WrappedComponent => {
  class wrapper extends Component {
    componentDidMount() {
      document.addEventListener("copy", this.copyData);
    }

    copyData = () => {
      console.log("copied");
    };

    componentWillUnmount() {
      document.removeEventListener("copy", this.copyData);
    }

    logData = () => {
      console.log("logData");
    };

    render() {
      return <WrappedComponent logData={this.logData} {...this.props} />;
    }
  }

  wrapper.propTypes = {};

  return wrapper;
};
