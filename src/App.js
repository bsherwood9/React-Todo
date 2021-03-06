import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import SearchForm from "./components/TodoComponents/searchForm";
import "../src/App.css";

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
          // {
          //   task: "Hello",
          //   id: Date.now(),
          //   status: false
          // }
        ],
        searchTerm: ""
      };
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.todoList !== this.state.todoList) {
      localStorage.setItem("todoData", JSON.stringify(this.state.todoList));
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
  };

  addTodo = todoText => {
    const newTodo = {
      task: todoText,
      status: false,
      id: Date.now()
    };
    this.setState({ todoList: [...this.state.todoList, newTodo] });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  filterTodos = () => {
    this.setState({
      todoList: this.state.todoList.filter(
        item => item.status === false && item.task
      )
    });
    console.log("filter", this.state.todoList);
  };

  handleSearch = event => {
    this.setState({
      searchTerm: event.target.value
    });
    console.log(this.state.searchTerm);
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">TODOS</h1>
        <div className="todoBox">
          <TodoList
            todoList={this.state.todoList}
            toggleTodo={this.toggleTodo}
            searchTerm={this.state.searchTerm}
          />
        </div>
        <TodoForm addTodo={this.addTodo} filterTodos={this.filterTodos} />
        <div className="search">
          <SearchForm
            searchTerm={this.state.searchTerm}
            handleSearch={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

export default App;
