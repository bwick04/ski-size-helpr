import React, { Component } from "react";

class HeightForm extends Component {
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
      <div>
        <label for="height">
          Height:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <p>Your height is: {this.state.value}</p>
        </label>
      </div>
    );
  }
}

export default HeightForm;
