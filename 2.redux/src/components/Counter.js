import React, { Component } from "react";
import Value from "./Value";
import Control from "./Control";
import { connect } from "react-redux";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <Value />
        <Control />
      </div>
    );
  }
}

//const map statetopops 부터
