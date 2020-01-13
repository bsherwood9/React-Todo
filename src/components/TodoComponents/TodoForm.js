import React from "react";

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
      <form onSubmit={this.submitHandler}>
        <label htmlFor="todo">Todo Entry:</label>
        <input
          name="todo"
          type="text"
          value={this.state.task}
          onChange={this.changeHandler}
          placeholder="Add a TODO here..."
        />
        <button type="submit">Add</button>
        <button onClick={this.props.filterTodos}>Clear Complete</button>
      </form>
    );
  }
}

export default TodoForm;
