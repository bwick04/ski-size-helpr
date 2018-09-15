import React, { Component } from "react";

class WeightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <label for="height">
        Weight:
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Your weight is: {this.state.value}</p>
      </label>
    );
  }
}

export default WeightForm;
