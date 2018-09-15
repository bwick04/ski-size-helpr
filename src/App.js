import React, { Component } from "react";
import "./App.css";
import SubmitForm from "./components/SubmitForm";

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
        <hr class="horizontal-line" />
        <br />
        <SubmitForm />
        <br />
      </div>
    );
  }
}

export default App;
