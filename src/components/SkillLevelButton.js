import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default class SkillLevelButton extends Component {
  constructor(props) {
    super(props);
    this.handleSkillClick = this.handleSkillClick.bind(this);
  }

  handleSkillClick(e) {
    this.props.onSkillLevelChange(e.target.value);
  }

  render() {
    const skillLevel = this.props.skillLevel;

    return (
      <div>
        <ButtonGroup>
          <Button
            color="primary"
            value={"beginner"}
            onClick={this.handleSkillClick}
            active={skillLevel === "beginner"}
          >
            beginner
          </Button>
          <Button
            color="primary"
            value={"intermediate"}
            onClick={this.handleSkillClick}
            active={skillLevel === "intermediate"}
          >
            intermediate
          </Button>
          <Button
            color="primary"
            value={"advanced"}
            onClick={this.handleSkillClick}
            active={skillLevel === "advanced"}
          >
            advanced
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
