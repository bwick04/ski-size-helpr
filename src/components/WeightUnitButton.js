import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

class WeightUnitButton extends Component {
  constructor(props) {
    super(props);
    this.handleWeightUnitClick = this.handleWeightUnitClick.bind(this);
  }

  handleWeightUnitClick(e) {
    this.props.onWeightUnitClick(e.target.value);
  }

  render() {
    const weightUnit = this.props.weightUnit;

    return (
      <div>
        <ButtonGroup>
          <Button
            color="primary"
            value={"lbs"}
            onClick={this.handleWeightUnitClick}
            active={weightUnit === "lbs"}
          >
            lbs
          </Button>
          <Button
            color="primary"
            value={"kg"}
            onClick={this.handleWeightUnitClick}
            active={weightUnit === "kg"}
          >
            kg
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default WeightUnitButton;
