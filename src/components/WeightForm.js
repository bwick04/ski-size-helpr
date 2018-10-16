import React, { Component } from "react";

export default class WeightForm extends Component {
  constructor(props) {
    super(props);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  handleWeightChange(e) {
    this.props.onWeightChange(e.target.value);
  }

  render() {
    const weight = this.props.weight;

    return (
      <div>
        <label className="form-container__label" form="weight">
          Weight:{" "}
        </label>
        <input
          type="text"
          placeholder="enter your weight"
          value={weight}
          onChange={this.handleWeightChange}
        />
      </div>
    );
  }
}
