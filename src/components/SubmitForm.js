import React, { Component } from "react";
import HeightForm from "./HeightForm";
import HeightUnitButton from "./HeightUnitButton";
import WeightForm from "./WeightForm";
import WeightUnitButton from "./WeightUnitButton";
import SkillLevelButton from "./SkillLevelButton";

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <HeightForm />
        <HeightUnitButton />
        <br />
        <WeightForm />
        <WeightUnitButton />
        <br />
        <SkillLevelButton />
        <br />
        <button type="submit" class="btn btn-secondary">
          submit
        </button>
      </form>
    );
  }
}

export default SubmitForm;
