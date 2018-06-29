import React, { Component } from "react";
import PropsTypes from "prop-types";
import Value from "./Value";
import Control from "./Control";

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Value />
        <Control />
      </div>
    );
  }
}
Counter.prototype = {};
Counter.defaultProps = {};
