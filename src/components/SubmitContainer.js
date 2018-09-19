import React, { Component } from "react";
import HeightForm from "./HeightForm";
import HeightUnitButton from "./HeightUnitButton";
import WeightForm from "./WeightForm";
import WeightUnitButton from "./WeightUnitButton";
import SkillLevelButton from "./SkillLevelButton";

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    // Data from other components lives here in the parent for rendering
    this.state = {
      height: null,
      heightUnit: null,
      weight: null,
      weightUnit: null,
      skillLevel: null
    };

    // Binding functions with data ???
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleHeightUnitChange = this.handleHeightUnitChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleWeightUnitChange = this.handleWeightUnitChange.bind(this);
    this.handleSkillLevelChange = this.handleSkillLevelChange.bind(this);
  }

  // Call back functions for passing data back to the parent
  handleHeightChange(height) {
    this.setState({ height: height });
  }

  handleHeightUnitChange(heightUnit) {
    this.setState({ heightUnit: heightUnit });
  }

  handleWeightChange(weight) {
    this.setState({ weight: weight });
  }

  handleWeightUnitChange(weightUnit) {
    this.setState({ weightUnit: weightUnit });
  }

  handleSkillLevelChange(skillLevel) {
    this.setState({ skillLevel: skillLevel });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <HeightForm
          height={this.state.height}
          onHeightChange={this.handleHeightChange}
        />
        <HeightUnitButton
          heightUnit={this.state.heightUnit}
          onHeightUnitClick={this.handleHeightUnitChange}
        />
        <br />
        <WeightForm
          weight={this.state.weight}
          onWeightChange={this.handleWeightChange}
        />
        <WeightUnitButton
          // passing weightUnit as a prop to weightUnitButton component (parent to child)
          weightUnit={this.state.weightUnit}
          // passing handleWeightUnitChange as a prop to weightUnitButton component (parent to child)
          onWeightUnitClick={this.handleWeightUnitChange}
        />
        <br />
        <SkillLevelButton
          skillLevel={this.state.skillLevel}
          onSkillLevelChange={this.handleSkillLevelChange}
        />
        <br />
        <button type="submit" className="btn btn-secondary">
          submit
        </button>
      </form>
    );
  }
}

export default SubmitForm;
