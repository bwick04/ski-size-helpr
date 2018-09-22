import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default class HeightUnitButton extends Component {
  constructor(props) {
    super(props);
    this.handleHeightUnitClick = this.handleHeightUnitClick.bind(this);
  }

  // Creating an event handle for onClick event from buttons
  handleHeightUnitClick(e) {
    // getting prop from parent (must match name from parent) and assigning value from button onClick event
    this.props.onHeightUnitClick(e.target.value);
  }

  render() {
    // setting heightUnit from parent class being passed as a prop
    const heightUnit = this.props.heightUnit;

    return (
      <div>
        <ButtonGroup>
          <Button
            color="primary"
            value={"inches"}
            onClick={this.handleHeightUnitClick}
            active={heightUnit === "inches"}
          >
            inches
          </Button>
          <Button
            color="primary"
            value={"centimeters"}
            onClick={this.handleHeightUnitClick}
            active={heightUnit === "centimeters"}
          >
            centimeters
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
