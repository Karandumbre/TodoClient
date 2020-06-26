import React, { Component } from "react";
import "./App.css";
import DisplayTodosListComponent from "./components/DisplayTodosListComponent";
import "react-toastify/dist/ReactToastify.css";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <DisplayTodosListComponent />
      </div>
    );
  }
}

export default App;
