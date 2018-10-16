import React, { Component } from "react";
import HeightForm from "./HeightForm";
import HeightUnitButton from "./HeightUnitButton";
import WeightForm from "./WeightForm";
import WeightUnitButton from "./WeightUnitButton";
import SkillLevelButton from "./SkillLevelButton";
import SkiSize from "./SkiSize";

export default class SubmitForm extends Component {
  constructor(props) {
    super(props);
    // Data from other components lives here in the parent for rendering
    this.state = {
      height: null,
      heightUnit: null,
      weight: null,
      weightUnit: null,
      skillLevel: null,
      skiSize: " -- "
    };

    // Binding data with functions within. allows it to setState
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleHeightUnitChange = this.handleHeightUnitChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleWeightUnitChange = this.handleWeightUnitChange.bind(this);
    this.handleSkillLevelChange = this.handleSkillLevelChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  // Check to see if data entry is emtpy for button disabling/enableing
  // returns true to disable submit button
  disableSubmitButton() {
    if (
      this.state.height &&
      this.state.heightUnit &&
      this.state.weight &&
      this.state.weightUnit &&
      this.state.skillLevel != null
    ) {
      return false;
    } else {
      return true;
    }
  }

  // Should refactor this so its somewhere else to make it cleaner
  // Dislays "SkiSize" component when clicked
  // Calculation for ski size -- VERY arbitrary // not completely accurate
  handleClick(height) {
    let baseSize = 0;
    let heightCalc = 0;
    let weightCalc = 0;

    // Setting the height variable for either KG or LBS
    if (this.state.heightUnit === "centimeters") {
      heightCalc = this.state.height / 2.54;
    } else {
      heightCalc = this.state.height;
    }

    console.log(this.state.weightUnit);
    if (this.state.weightUnit === "kg") {
      weightCalc = this.state.weight / 0.453592;
    } else {
      weightCalc = this.state.weight;
    }

    console.log(weightCalc);
    if (heightCalc <= 60) {
      baseSize = 140;
    } else if (heightCalc > 60 && heightCalc <= 62) {
      baseSize = 143;
    } else if (heightCalc > 62 && heightCalc <= 64) {
      baseSize = 147;
    } else if (heightCalc > 64 && heightCalc <= 66) {
      baseSize = 150;
    } else if (heightCalc > 66 && heightCalc <= 68) {
      baseSize = 153;
    } else if (heightCalc > 68 && heightCalc <= 70) {
      baseSize = 156;
    } else if (heightCalc > 70 && heightCalc <= 72) {
      baseSize = 159;
    } else if (heightCalc > 72 && heightCalc <= 74) {
      baseSize = 162;
    } else if (heightCalc > 74) {
      baseSize = 180;
    }

    if (weightCalc >= 160) {
      baseSize += 5;
    }

    if (this.state.skillLevel === "beginner") {
      baseSize -= 3;
    } else if (this.state.skillLevel === "intermediate") {
      baseSize += 1;
    } else if (this.state.skillLevel === "advanced") {
      baseSize += 3;
    }

    this.setState({ skiSize: baseSize });
  }

  render() {
    return (
      <div className="submit-container">
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
        <button
          id="submitButton"
          type="submit"
          className="btn btn-secondary"
          disabled={this.disableSubmitButton()}
          onClick={this.handleClick}
        >
          submit
        </button>
        {<SkiSize skiSize={this.state.skiSize} />}
      </div>
    );
  }
}
