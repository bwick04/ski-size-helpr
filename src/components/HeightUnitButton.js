import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

class HeightUnitButton extends Component {
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
            onClick={() => this.onRadioButtonClick("inches")}
            active={this.state.rSelected === "inches"}
          >
            inches
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioButtonClick("centimeters")}
            active={this.state.rSelected === "centimeters"}
          >
            centimeters
          </Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    );
  }
}

export default HeightUnitButton;
