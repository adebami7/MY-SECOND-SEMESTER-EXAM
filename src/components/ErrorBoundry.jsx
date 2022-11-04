import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return error ? <h1>An error occured while rendering this component</h1> : children;
  }
}

export default ErrorBoundry;
