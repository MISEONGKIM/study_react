import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Control extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize </button>
      </div>
    );
  }
}

Control.PropTypes = {
  onPlus: PropTypes.func,
  onSubract: PropTypes.func,
  onRandomizeColor: PropTypes.func
};

function createWarning(funcName) {
  return () => console.warn(funcName + " is not defined");
}

Control.defaultProps = {
  onPlus: createWarning("onPlus"),
  onSubract: createWarning("onSubract"),
  onRandomizeColor: createWarning("onRandomizeColor")
};
