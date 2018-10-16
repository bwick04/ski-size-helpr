import React, { Component } from "react";
import "./App.css";

import SubmitContainer from "./components/SubmitContainer";
import Titles from "./components/Titles";

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                  <Titles />
                </div>
                <div className="col-md-7 form-container">
                  <SubmitContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
