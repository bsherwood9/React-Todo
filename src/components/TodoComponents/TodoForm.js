import React from "react";
import "../../App.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: Date.now(),
      status: false
    };
  }
  changeHandler = event => {
    this.setState({ task: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="form-set">
        <input
          name="todo"
          type="text"
          value={this.state.task}
          onChange={this.changeHandler}
          placeholder="Add a TODO here..."
          className="todoBar"
        />
        <div className="buttonBox">
          <button type="submit">Add</button>
          <button onClick={this.props.filterTodos}>Clear Complete</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
