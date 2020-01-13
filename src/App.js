import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    if (localStorage.getItem("todoData")) {
      this.state = {
        todoList: JSON.parse(localStorage.getItem("todoData"))
      };
    } else {
      this.state = {
        todoList: [
          {
            task: "Hello",
            id: Date.now(),
            status: false
          }
        ]
      };
    }
  }

  toggleTodo = todoId => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (todoId === item.id) {
          return {
            ...item,
            status: !item.status
          };
        }
        return item;
      })
    });
    localStorage.setItem("todoData", JSON.stringify(this.state.todoList));
  };

  addTodo = todoText => {
    const newTodo = {
      task: todoText,
      status: false,
      id: Date.now()
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
    localStorage.setItem("todoData", JSON.stringify(this.state.todoList));
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  filterTodos = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => !item.status)
    });
    localStorage.setItem("todoData", JSON.stringify(this.state.todoList));
  };

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} toggleTodo={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} filterTodos={this.filterTodos} />
      </div>
    );
  }
}

export default App;
