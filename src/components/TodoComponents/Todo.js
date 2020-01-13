import React from "react";
import "../TodoComponents/Todo.css";

const Todo = props => (
  <h1
    className={`item${props.item.status ? " status" : ""}`}
    onClick={e => {
      props.toggleTodo(props.item.id);
    }}
  >
    {props.item.task}
  </h1>
);

export default Todo;
