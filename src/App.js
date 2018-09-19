import React, { Component } from "react";
import "./App.css";
import SubmitContainer from "./components/SubmitContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ski Size Helpr</h1>
        </header>
        <br />
        <h3>
          This website is designed to help you find the right size skis to add
          to that quiver!
        </h3>
        <hr className="horizontal-line" />
        <br />
        <SubmitContainer />
        <br />
      </div>
    );
  }
}

export default App;
