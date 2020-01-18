// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";
const TodoList = props => {
  if (!props.searchTerm) {
    return props.todoList.map(item => {
      if (item.task) {
        return <Todo item={item} key={item.id} toggleTodo={props.toggleTodo} />;
      }
    });
  } else {
    return props.todoList
      .filter(item =>
        item.task.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
      .map(item => (
        <Todo item={item} key={item.id} toggleTodo={props.toggleTodo} />
      ));
  }
};

export default TodoList;
