import React, { Component } from "react";

class WeightForm extends Component {
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
        <label form="height">
          Weight:
          <input
            type="text"
            placeholder="enter your weight"
            value={weight}
            onChange={this.handleWeightChange}
          />
        </label>
      </div>
    );
  }
}

export default WeightForm;
