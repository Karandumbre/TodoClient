import React, { Component } from "react";
import "./App.css";
import DisplayTodosListComponent from "./components/DisplayTodosListComponent";
import { fetchRequest } from "./redux/action";
import { connect } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.fetchTodoListRequest();
  }

  render() {
    return (
      <div className="App">
        <DisplayTodosListComponent />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodoListRequest: () => dispatch(fetchRequest()),
  };
};

export default connect(null, mapDispatchToProps)(App);
