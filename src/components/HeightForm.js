import React, { Component } from "react";

export default class HeightForm extends Component {
  constructor(props) {
    super(props);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  handleHeightChange(e) {
    this.props.onHeightChange(e.target.value);
  }

  render() {
    const height = this.props.height;

    return (
      <div>
        <label className="form-container__label" form="height">
          Height:
        </label>
        <input
          type="text"
          placeholder="enter your height"
          value={height}
          onChange={this.handleHeightChange}
        />
      </div>
    );
  }
}
