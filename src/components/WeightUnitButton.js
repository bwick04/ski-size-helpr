import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

class WeightUnitButton extends Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioButtonClick = this.onRadioButtonClick.bind(this);
  }

  onRadioButtonClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => this.onRadioButtonClick("lbs")}
            active={this.state.rSelected === "lbs"}
          >
            lbs
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioButtonClick("kg")}
            active={this.state.rSelected === "kg"}
          >
            kg
          </Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    );
  }
}

export default WeightUnitButton;
