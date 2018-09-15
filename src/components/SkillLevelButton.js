import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

class SkillLevelButton extends Component {
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
            onClick={() => this.onRadioButtonClick("beginner")}
            active={this.state.rSelected === "beginner"}
          >
            beginner
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioButtonClick("intermediate")}
            active={this.state.rSelected === "intermediate"}
          >
            intermediate
          </Button>
          <Button
            color="primary"
            onClick={() => this.onRadioButtonClick("advanced")}
            active={this.state.rSelected === "advanced"}
          >
            advanced
          </Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    );
  }
}

export default SkillLevelButton;
