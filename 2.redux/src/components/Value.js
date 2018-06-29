import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Value extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

Value.PropTypes = {
  number: PropTypes.number
};

Value.defaultProps = {
  number: -1
};
