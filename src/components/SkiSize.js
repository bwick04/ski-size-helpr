import React, { Component } from "react";

export default class SkiSize extends Component {
  render() {
    const skiSize = this.props.skiSize;

    return (
      <div>
        <h1>
          {skiSize}
          cm
        </h1>
      </div>
    );
  }
}
