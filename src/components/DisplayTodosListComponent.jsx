import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchRequest } from "../redux/action";
import TodoList from "./TodoList";
import style from "./../styles/style.module.css";
import Modal from "react-modal";
import CreateEditTodoComponent from "./CreateEditTodoComponent";
import SearchComponent from "./SearchComponent";

class DisplayTodosListComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  async componentDidMount() {
    await this.props.fetchTodoListRequest();
  }

  todoList = () => {
    return (
      this.props.currentState &&
      this.props.currentState.map((todo, index) => (
        <TodoList todo={todo} key={index} />
      ))
    );
  };

  openCloseModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    return (
      <div className="container">
        <div className={style.header}>
          <h3>Todos List</h3>
          <button
            className={`btn btn-primary ${style.PlusButton}`}
            onClick={this.openCloseModal}
          >
            +
          </button>
        </div>
        <SearchComponent />
        <table className="table table-striped border mt-3">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Created At</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>

        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.openCloseModal}
        >
          <CreateEditTodoComponent
            openCloseModal={this.openCloseModal}
            id={null}
          ></CreateEditTodoComponent>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodoListRequest: () => dispatch(fetchRequest()),
  };
};

const mapStateToProps = (state) => {
  return {
    currentState: state.data,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayTodosListComponent);
